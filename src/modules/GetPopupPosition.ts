import define from '~/const/define'

const GetPopupPosition = (
  e: React.MouseEvent<HTMLElement>
): { top: number; left: number } => {
  // クリーンサイズを取得
  const screenWidth = window.screen.width
  const screenHeight = window.screen.height

  // clickした位置を取得
  const x = e.screenX
  const y = e.screenY

  // clickした位置にPOPUPのサイズを足した値
  const popupWidth = x + define.POPUP_WIDTH
  const popupHeight = y + define.POPUP_HEIGHT

  // もし、popupHeightがscreenHeightを超える場合は、screenHeightからPOPUPの高さ分を引く
  const top =
    popupHeight > screenHeight ? screenHeight - define.POPUP_HEIGHT : y

  // もし、popupWidthがscreenWidthを超える場合は、screenWidthからPOPUPの横幅分を引く
  const left = popupWidth > screenWidth ? screenWidth - define.POPUP_WIDTH : x

  return { top, left }
}

export default GetPopupPosition
