import {
  paletteHEX as p,
  grayHEX as g,
  fgHEX as fg,
  bgHEX as bg
} from "./palette.ts"

const name = "pu";
const NONE = "NONE"
const f=13
const b=2

function hi(group: string, fg: string, bg: string, opt = "NONE") {
  console.log(`hi ${group} guifg=${fg} guibg=${bg} gui=${opt}`);
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
hi("Normal", fg, bg);
hi("NormalFloat", fg, bg);
hi("IncSearch", NONE, p.bg.y)
hi("CurSearch", NONE, p.bg.y)
hi("Search", NONE, p.bg.b)
hi("ErrorMsg", p.std.r, NONE)
hi("WarningMsg", p.std.y, NONE)
hi("ModeMsg", fg, NONE, "bold")
hi("MoreMsg", p.std.b, NONE, "bold")
hi("Question", p.std.y, NONE)
hi("StatusLine", fg, g[b+1])
hi("StatusLineTerm", fg, g[b+1])
hi("StatusLineNC", g[f-2], g[b])
hi("StatusLineTermNC", g[f-2], g[b])
hi("VertSplit", g[0], NONE)
hi("WinSeparator", g[0], NONE)
hi("FloatBorder", g[b+2], NONE)
hi("WildMenu", p.std.b, g[b+1])
hi("DiffAdd", NONE, p.bgWeaker.g)
hi("DiffChange", NONE, p.bgWeaker.b)
hi("DiffDelete", p.bg.r, NONE)
hi("DiffText", NONE, p.bgWeaker.b, "underline")
hi("Cursor", NONE, NONE, "reverse")
console.log(
`highlight! link vCursor Cursor
highlight! link iCursor Cursor
highlight! link lCursor Cursor
highlight! link CursorIM Cursor
`)
hi("CursorLine", NONE, g[b])
hi("CursorColumn", NONE, g[b])
hi("CursorLineNr", NONE, NONE)
hi("Folded", fg, bg)
hi("FoldColumn", fg, bg)
hi("MatchParen", NONE, NONE, "reverse")

hi("Comment", g[b+2], NONE)
hi("TSVariable", p.light.c, NONE)
hi("Constant", p.light.p, NONE)
hi("String", p.light.p, NONE)
hi("Character", p.light.p, NONE)
hi("Number", p.light.p, NONE)
hi("Boolean", p.light.p, NONE)
hi("Float", p.light.p, NONE)
hi("Identifier", p.light.c, NONE)
hi("Function", p.light.b, NONE)
hi("Statement", p.std.b, NONE)
hi("Conditional", p.std.b, NONE)
hi("Repeat", p.std.b, NONE)
hi("Label", p.std.b, NONE)
hi("Operator", p.std.b, NONE)
hi("Keyword", p.std.p, NONE)
hi("Exception", p.std.b, NONE)
hi("PreProc", p.std.b, NONE)
hi("Include", p.std.b, NONE)
hi("Define", p.std.b, NONE)
hi("Macro", p.std.b, NONE)
hi("PreCondit", p.std.b, NONE)
hi("Type", p.std.b, NONE)
hi("StorageClass", p.std.b, NONE)
hi("Structure", p.std.b, NONE)
hi("Typedef", p.std.b, NONE)
hi("Special", p.std.o, NONE)
hi("SpecialChar", p.std.o, NONE)
hi("Tag", p.std.o, NONE)
hi("Delimiter", fg, NONE)
hi("SpecialComment", p.std.o, NONE)
hi("Debug", p.std.o, NONE)
//hi("Underlined")
//hi("Ignore")
hi("Error", NONE, p.bg.r)
hi("Todo", NONE, p.bg.b)
hi("Added", NONE, p.bgWeaker.g)
hi("Changed", NONE, p.bgWeaker.b)
hi("Removed", p.bg.r, NONE)
