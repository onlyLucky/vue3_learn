/*
 * @Author: fg
 * @Date: 2022-12-24 16:04:56
 * @LastEditors: fg
 * @LastEditTime: 2022-12-24 16:47:41
 * @Description: content
 */
type Options = {
  el: string
}
type Return = {
  baseUrl: string | null
}

const toBase64 = (el: HTMLImageElement): string => {
  const canvas: HTMLCanvasElement = document.createElement("canvas")
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D
  canvas.width = el.width
  canvas.height = el.height
  ctx.drawImage(el, 0, 0, canvas.width, canvas.height)

  return canvas.toDataURL("image/png")
}


export default function (options: Options): Promise<Return> {
  return new Promise((resolve, reject) => {
    onMounted(() => {
      const file: HTMLImageElement = document.querySelector(options.el) as HTMLImageElement;
      file.onload = (): void => {
        resolve({
          baseUrl: toBase64(file)
        })
      }
    })
  })
}