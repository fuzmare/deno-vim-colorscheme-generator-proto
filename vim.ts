import {
  paletteHEX as p,
  grayHEX as g,
  fgHEX as fg,
  bgHEX as bg
} from "./palette.ts"

const name = "antibalus";
const NONE = "NONE"
const f=13
const b=2

function hi(group: string, fg: string, bg: string, opt = "NONE") {
  console.log(`hi ${group} guifg=${fg} guibg=${bg} gui=${opt}`);
}
function ln(from: string, to:string) {
  console.log(`hi! link ${from} ${to}`)
}

console.log(
`if !(has('termguicolors') && &termguicolors) && !has('gui_running') && &t_Co != 256
  echoerr '[${name}] termguicolors is not set. ${name} requires true-color support.'
  finish
endif

if !(exists('g:colors_name') && g:colors_name ==# '${name}')
  hi clear
  if exists('syntax_on')
    syntax reset
  endif
endif

let g:colors_name = '${name}'
`
)

//(neo)vim UI highlights
hi("Normal", fg, bg);
hi("NormalFloat", fg, bg);
hi("IncSearch", bg, p.light.b)
hi("CurSearch", bg, p.light.b)
hi("Search", NONE, p.bg.b)
hi("ErrorMsg", p.std.r, NONE)
hi("WarningMsg", p.std.y, NONE)
hi("ModeMsg", fg, NONE, "bold")
hi("MoreMsg", p.std.b, NONE, "bold")
hi("Question", p.std.y, NONE)
hi("NonText", g[b+3], NONE)
hi("StatusLine", fg, g[b+1])
hi("StatusLineTerm", fg, g[b+1])
hi("StatusLineNC", g[f-2], g[b])
hi("StatusLineTermNC", g[f-2], g[b])
hi("TabLine", g[b+3], NONE)
hi("TabLineFill", NONE, NONE)
hi("TabLineSel", g[f], g[b+2])
hi("VertSplit", g[0], NONE)
hi("WinSeparator", g[0], NONE)
hi("FloatBorder", g[b+2], NONE)
hi("WildMenu", p.std.b, g[b+1])
hi("DiffAdd", NONE, p.bgWeaker.g)
hi("DiffChange", NONE, p.bgWeaker.b)
hi("DiffDelete", p.std.r, p.bgWeaker.r)
hi("DiffText", NONE, p.bgWeaker.b)
hi("Cursor", NONE, NONE, "reverse")
ln("vCursor", "Cursor")
ln("iCursor", "Cursor")
ln("lCursor", "Cursor")
ln("CursorIM", "Cursor")
hi("CursorLine", NONE, g[b])
hi("CursorColumn", NONE, g[b])
hi("LineNr", g[b+3], NONE)
hi("CursorLineNr", g[b+6], NONE)
hi("Folded", p.light.m, g[b])
hi("FoldColumn", NONE, NONE)
hi("MatchParen", NONE, NONE, "reverse")
hi("Pmenu", fg, NONE)
hi("PmenuSel", NONE, g[b+1])
hi("Title", p.std.b, NONE, "bold")
hi("Directory", p.std.b, NONE)

//Basic highlights
hi("Comment", g[f-5], NONE)
hi("Constant", p.std.p, NONE)
hi("String", p.light.g, NONE)
hi("Character", p.light.g, NONE)
hi("Number", p.light.p, NONE)
hi("Boolean", p.light.g, NONE)
hi("Float", p.light.p, NONE)
hi("Identifier", p.std.b, NONE)
hi("Function", p.light.c, NONE)
hi("Statement", p.std.b, NONE)
hi("Conditional", p.std.b, NONE)
hi("Repeat", p.std.b, NONE)
hi("Label", p.std.b, NONE)
hi("Operator", p.std.b, NONE)
hi("Keyword", p.std.b, NONE)
hi("Exception", p.std.b, NONE)
hi("PreProc", p.std.p, NONE)
hi("Include", p.std.b, NONE)
hi("Define", p.std.b, NONE)
hi("Macro", p.std.p, NONE)
hi("PreCondit", p.std.b, NONE)
hi("Type", p.std.m, NONE)
hi("StorageClass", p.std.b, NONE)
hi("Structure", p.std.b, NONE)
hi("Typedef", p.std.b, NONE)
hi("Special", p.std.b, NONE)
hi("SpecialChar", p.std.b, NONE)
hi("Tag", p.std.b, NONE)
hi("Delimiter", fg, NONE)
hi("SpecialComment", p.std.b, NONE)
hi("Debug", p.std.o, NONE)
hi("Underlined", NONE, NONE, "underline")
hi("Ignore", NONE, NONE, "strikethrough")
hi("Error", NONE, p.bg.r)
hi("Todo", bg, p.std.b)
ln("Added", "DiffAdd")
ln("Changed", "DiffChange")
ln("Removed", "DiffDelete")

//Diagnostics higilights
hi("DiagnosticError", p.std.r, p.bgWeaker.r)
hi("DiagnosticWarn", p.std.y, p.bgWeaker.y)
hi("DiagnosticInfo", p.std.c, p.bgWeaker.c)
hi("DiagnosticHint", p.std.b, p.bgWeaker.b)
hi("DiagnosticOk", p.std.g, p.bgWeaker.g)
hi("DiagnosticSignError", p.std.r, NONE)
hi("DiagnosticSignWarn", p.std.y, NONE)
hi("DiagnosticSignInfo", p.std.c, NONE)
hi("DiagnosticSignHint", p.std.b, NONE)
hi("DiagnosticSignOk", p.std.g, NONE)
hi("DiagnosticUnderlineError", NONE, NONE, `undercurl guisp=${p.std.r}`)
hi("DiagnosticUnderlineWarn", NONE, NONE, `undercurl guisp=${p.std.y}`)
hi("DiagnosticUnderlineInfo", NONE, NONE, `undercurl guisp=${p.std.c}`)
hi("DiagnosticUnderlineHint", NONE, NONE, `undercurl guisp=${p.std.b}`)
hi("DiagnosticUnderlineOk", NONE, NONE, `undercurl guisp=${p.std.g}`)

//Plugin highlights
hi("GitSignsAdd", p.std.g, NONE)
hi("GitSignsChange", p.std.b, NONE)
hi("GitSignsDelete", p.std.r, NONE)

//Tofu (for cmdline cursor)
hi("CmdlineCursor", g[0], g[15])

console.log(
`if has('nvim')
  let g:terminal_color_0  = '${g[3]}'
  let g:terminal_color_1  = '${p.std.r}'
  let g:terminal_color_2  = '${p.std.g}'
  let g:terminal_color_3  = '${p.std.y}'
  let g:terminal_color_4  = '${p.std.b}'
  let g:terminal_color_5  = '${p.std.m}'
  let g:terminal_color_6  = '${p.std.c}'
  let g:terminal_color_7  = '${g[13]}'
  let g:terminal_color_8  = '${g[4]}'
  let g:terminal_color_9  = '${p.light.r}'
  let g:terminal_color_10 = '${p.light.g}'
  let g:terminal_color_11 = '${p.light.y}'
  let g:terminal_color_12 = '${p.light.b}'
  let g:terminal_color_13 = '${p.light.m}'
  let g:terminal_color_14 = '${p.light.c}'
  let g:terminal_color_15 = '${g[15]}'
endif`
)
