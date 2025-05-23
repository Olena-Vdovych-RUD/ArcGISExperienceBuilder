/** @jsx jsx */
import { React, css, jsx, classNames, type IMSizeModeLayoutJson, type LayoutItemConstructorProps, type IMLayoutJson, hooks } from 'jimu-core'
import { DropArea, CanvasPane } from 'jimu-layouts/layout-builder'
import { utils } from 'jimu-layouts/layout-runtime'
import { calInsertPositionForRow, calInsertPositionForColumn, insertWidgetToLayout } from '../utils'

export interface DropZoneProps {
  placeholder?: {
    color: string
    size: number[]
  }
  vertical?: boolean
  childClass: string
  layout: IMLayoutJson
  layouts: IMSizeModeLayoutJson
  className?: string
}

// Drag and insert a widget to the specified `layout`
export const DropZone = React.forwardRef((props: DropZoneProps, ref) => {
  const { layout, layouts, vertical, childClass, placeholder, className } = props
  const { color, size: [long, short] } = placeholder
  const nodeRef = React.useRef<HTMLDivElement>(null)
  const overlayRef = React.useRef<CanvasPane>(null)
  const referenceIdRef = React.useRef<string>(null)
  const childRectsRef = React.useRef<Array<Partial<DOMRectReadOnly> & { id: string }>>(null)
  const overlayNodeRef = React.useRef<HTMLCanvasElement>(null)
  const [dragover, setDragover] = React.useState<boolean>(false)
  const handleRef = hooks.useForkRef(nodeRef, ref)

  const style = css`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    background: transparent;
    z-index: ${dragover ? 1 : 0};
    > .drop-area {
      width: 100%;
      height: 100%;
    }
    > .overlay {
      position: absolute;
      left: 0;
      bottom: 0;
      top: 0;
      right: 0;
      background: transparent;
      z-index: -1;
      &.hide {
        display: none;
      }
    }
  `

  React.useEffect(() => {
    overlayRef.current = new CanvasPane(overlayNodeRef.current)
  }, [])

  const collectBounds = () => {
    childRectsRef.current = []

    const domRect: Partial<DOMRectReadOnly> = nodeRef.current.getBoundingClientRect()
    const children = nodeRef.current.parentNode.querySelectorAll(`.${childClass}`)

    if (children && children.length) {
      children.forEach((node) => {
        const itemId = node.getAttribute('data-layoutitemid')
        if (layout.order && layout.order.includes(itemId)) {
          const rect = utils.relativeClientRect(node.getBoundingClientRect(), domRect as any)
          rect.id = itemId
          childRectsRef.current.push(rect)
        }
      })
    }

    if (!vertical) {
      childRectsRef.current.sort((a, b) => a.left - b.left)
    } else {
      childRectsRef.current.sort((a, b) => a.top - b.top)
    }
  }

  const toggleDragoverEffect = (value: boolean) => {
    if (value) {
      referenceIdRef.current = null
      collectBounds()
      overlayRef.current.setSize(nodeRef.current.clientWidth, nodeRef.current.clientHeight)
    }
    setDragover(value)
  }

  const onDragOver = (_, __, containerRect: Partial<Partial<DOMRectReadOnly>>, itemRect: Partial<Partial<DOMRectReadOnly>>, clientX: number, clientY: number) => {
    let rect = itemRect
    const childRects = childRectsRef.current

    const height = nodeRef.current.offsetHeight
    const width = nodeRef.current.offsetWidth

    if (childRects && childRects.length) {
      if (!vertical) {
        const { insertX, refId } = calInsertPositionForRow(containerRect as Partial<DOMRectReadOnly>, childRects, clientX)
        referenceIdRef.current = refId
        rect = {
          left: insertX - short / 2 + nodeRef.current.scrollLeft,
          width: short,
          top: (height - long) / 2 + nodeRef.current.scrollTop,
          height: long
        }
      } else {
        const { insertY, refId } = calInsertPositionForColumn(containerRect as Partial<DOMRectReadOnly>, childRects, clientY)
        referenceIdRef.current = refId
        rect = {
          top: insertY - short / 2 + nodeRef.current.scrollTop,
          width: long,
          left: (width - long) / 2 + nodeRef.current.scrollLeft,
          height: short
        }
      }
    } else {
      if (!vertical) {
        rect = {
          left: containerRect.width / 2 - short / 2,
          width: short,
          top: (height - long) / 2 + nodeRef.current.scrollTop,
          height: long
        }
      } else {
        rect = {
          top: containerRect.height / 2 - short / 2,
          width: long,
          left: (width - long) / 2 + nodeRef.current.scrollLeft,
          height: short
        }
      }
    }

    overlayRef.current.clear()
    overlayRef.current.setColor(color)
    overlayRef.current.drawRect(rect as Partial<DOMRectReadOnly>)
  }

  const onDrop = (draggingItem: LayoutItemConstructorProps, containerRect: Partial<DOMRectReadOnly>, itemRect: Partial<DOMRectReadOnly>) => {
    overlayRef.current.clear()

    let insertIndex = 0
    if (referenceIdRef.current) {
      insertIndex = (layout.order && layout.order.indexOf(referenceIdRef.current)) || 0
    } else if (layout.order) {
      insertIndex = layout.order.length
    }

    insertWidgetToLayout(layout, draggingItem, insertIndex)

    referenceIdRef.current = null
    childRectsRef.current = []
  }

  return (
    <div
      className={classNames('drop-zone', className)}
      ref={handleRef}
      css={style}
    >
      <DropArea
        style={style}
        className='drop-area'
        layouts={layouts}
        highlightDragover
        onDragOver={onDragOver}
        onDrop={onDrop}
        onToggleDragoverEffect={toggleDragoverEffect}
      />
      <canvas className={classNames('overlay', { hide: !dragover })} ref={overlayNodeRef} />
    </div>
  )
})
