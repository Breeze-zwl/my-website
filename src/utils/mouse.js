const $html = document.getElementsByTagName('html')[0]
$html.onclick = (e) => {
  let a_idx = Math.floor(Math.random() * 28)
  let a = new Array(
    '富强',
    '民主',
    '文明',
    '和谐',
    '自由',
    '平等',
    '公正',
    '法治',
    '爱国',
    '敬业',
    '诚信',
    '友善',
    '❤',
    '元气满满',
    '快乐',
    '平静',
    '积极',
    '热情',
    '温柔',
    '正能量',
    '有品',
    '退退退',
    '栓Q',
    'YYDS',
    '开摆',
    '内卷',
    'PUA',
    '老六'
  )
  let color1 = Math.floor(Math.random() * 255)
  let color2 = Math.floor(Math.random() * 255)
  let color3 = Math.floor(Math.random() * 255)
  let $1 = document.createElement('span')

  $1.innerText = a[a_idx]
  a_idx = (a_idx + 1) % a.length
  let x = e.pageX
  let y = e.pageY
  $1.setAttribute(
    'style',
    `z-index:9999999999; top:${
      y - 20
    }px; left:${x}px; position:absolute; font-size:${Math.floor(
      Math.random() * 22 + 10
    )}px;font-weight:bold;color:rgb(${color1},${color2},${color3});user-select:none;`
  )
  document.querySelector('body').appendChild($1)
  $1.animate(
    {
      top: `${y - 200}px`,
      opacity: 0,
    },
    {
      duration: 1000,
      fill: 'forwards',
    }
  )
  clearTimeout(time)
  var time = setTimeout(function () {
    document.querySelector('body').removeChild($1)
  }, 1100)
}
