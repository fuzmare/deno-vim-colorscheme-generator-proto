import {
  paletteHEX as p,
  grayHEX as g,
  fgHEX as fg,
  bgHEX as bg
} from "./palette.ts"

type Highlight = {
  fg?: string,
  bg?: string,
  bold?: boolean,
  italic?: boolean,
  underline?: boolean,
  undercurl?: boolean,
  sp?: string,
  reverse?: boolean,
  standout?: boolean,
  strikethrough?: boolean,
  blend?: number,
};

const name = "antibalus";
const NONE = "NONE"
const f=13
const b=2

function hi(group: string, h: Highlight) {
  const opts = [];
  for(const [key, value] of Object.entries(h) as [keyof Highlight, string|boolean|number][]) {
    if (typeof value === 'string') {
      opts.push(`${key} = '${value}'`)
    } else {
      opts.push(`${key} = ${value}`)
    }
  }
  console.log(`  {group = '${group}', opts = {${opts.join(', ')}}},`)
}

console.log(
`if not (vim.fn.has('termguicolors') == 1 and vim.o.termguicolors) and not vim.fn.has('gui_running') == 1 and vim.o.t_Co ~= '256' then
    vim.api.nvim_err_writeln('[${name}] termguicolors is not set. ${name} requires true-color support.')
    return
end

if not (vim.g.colors_name ~= nil and vim.g.colors_name == '${name}') then
    vim.cmd('highlight clear')
    if vim.fn.exists('syntax_on') == 1 then
        vim.cmd('syntax reset')
    end
end

vim.g.colors_name = '${name}'

local highlights = {`
)

//(neo)vim UI highlights
hi("Normal", {fg: fg, bg: bg});
hi("NormalFloat", {fg: fg, bg: bg});
hi("IncSearch", {fg: bg, bg: p.light.b});
hi("CurSearch", {fg: bg, bg: p.light.b});
hi("Search", {fg: NONE, bg: p.bg.b});
hi("ErrorMsg", {fg: p.std.r, bg: NONE});
hi("WarningMsg", {fg: p.std.y, bg: NONE});
hi("ModeMsg", {fg: fg, bg: NONE, bold: true});
hi("MoreMsg", {fg: p.std.b, bg: NONE, bold: true});
hi("Question", {fg: p.std.y, bg: NONE});
hi("NonText", {fg: g[b+3], bg: NONE});
hi("StatusLine", {fg: fg, bg: g[b+1]});
hi("StatusLineTerm", {fg: fg, bg: g[b+1]});
hi("StatusLineNC", {fg: g[f-2], bg: g[b]});
hi("StatusLineTermNC", {fg: g[f-2], bg: g[b]});
hi("TabLine", {fg: g[b+3], bg: NONE});
hi("TabLineFill", {fg: NONE, bg: NONE});
hi("TabLineSel", {fg: g[f], bg: g[b+2]});
hi("VertSplit", {fg: g[0], bg: NONE});
hi("WinSeparator", {fg: g[0], bg: NONE});
hi("FloatBorder", {fg: g[b+2], bg: NONE});
hi("WildMenu", {fg: p.std.b, bg: g[b+1]});
hi("DiffAdd", {fg: NONE, bg: p.bgWeaker.g});
hi("DiffChange", {fg: NONE, bg: p.bgWeaker.b});
hi("DiffDelete", {fg: p.std.r, bg: p.bgWeaker.r});
hi("DiffText", {fg: NONE, bg: p.bgWeaker.b});
hi("Cursor", {fg: NONE, bg: NONE, reverse: true});
hi("vCursor", {fg: NONE, bg: NONE, reverse: true});
hi("iCursor", {fg: NONE, bg: NONE, reverse: true});
hi("lCursor", {fg: NONE, bg: NONE, reverse: true});
hi("CursorIM", {fg: NONE, bg: NONE, reverse: true});
hi("CursorLine", {fg: NONE, bg: g[b]});
hi("CursorColumn", {fg: NONE, bg: g[b]});
hi("LineNr", {fg: g[b+3], bg: NONE});
hi("CursorLineNr", {fg: g[b+6], bg: NONE});
hi("Folded", {fg: g[b+5], bg: g[b]});
hi("FoldColumn", {fg: NONE, bg: NONE});
hi("MatchParen", {fg: NONE, bg: NONE , reverse: true});
hi("Pmenu", {fg: fg, bg: NONE});
hi("PmenuSel", {fg: NONE, bg: g[b+1]});
hi("Title", {fg: p.std.b, bg: NONE , bold: true});
hi("Directory", {fg: p.std.b, bg: NONE});

//Basic highlights
hi("Comment", {fg: g[f-5], bg: NONE});
hi("Constant", {fg: p.std.p, bg: NONE});
hi("String", {fg: p.light.g, bg: NONE});
hi("Character", {fg: p.light.g, bg: NONE});
hi("Number", {fg: p.light.p, bg: NONE});
hi("Boolean", {fg: p.light.g, bg: NONE});
hi("Float", {fg: p.light.p, bg: NONE});
hi("Identifier", {fg: p.std.b, bg: NONE});
hi("Function", {fg: p.light.c, bg: NONE});
hi("Statement", {fg: p.std.b, bg: NONE});
hi("Conditional", {fg: p.std.b, bg: NONE});
hi("Repeat", {fg: p.std.b, bg: NONE});
hi("Label", {fg: p.std.b, bg: NONE});
hi("Operator", {fg: p.std.b, bg: NONE});
hi("Keyword", {fg: p.std.b, bg: NONE});
hi("Exception", {fg: p.std.b, bg: NONE});
hi("PreProc", {fg: p.std.p, bg: NONE});
hi("Include", {fg: p.std.b, bg: NONE});
hi("Define", {fg: p.std.b, bg: NONE});
hi("Macro", {fg: p.std.p, bg: NONE});
hi("PreCondit", {fg: p.std.b, bg: NONE});
hi("Type", {fg: p.std.m, bg: NONE});
hi("StorageClass", {fg: p.std.b, bg: NONE});
hi("Structure", {fg: p.std.b, bg: NONE});
hi("Typedef", {fg: p.std.b, bg: NONE});
hi("Special", {fg: p.std.b, bg: NONE});
hi("SpecialChar", {fg: p.std.b, bg: NONE});
hi("Tag", {fg: p.std.b, bg: NONE});
hi("Delimiter", {fg: fg, bg: NONE});
hi("SpecialComment", {fg: p.std.b, bg: NONE});
hi("Debug", {fg: p.std.o, bg: NONE});
hi("Underlined", {fg: NONE, bg: NONE , underline: true});
hi("Ignore", {fg: NONE, bg: NONE , strikethrough: true});
hi("Error", {fg: NONE, bg: p.bg.r});
hi("Todo", {fg: bg, bg: p.std.b});
hi("Added", {fg: NONE, bg: p.bgWeaker.g});
hi("Changed", {fg: NONE, bg: p.bgWeaker.b});
hi("REmoved", {fg: p.std.r, bg: p.bgWeaker.r});

//Diagnostics higilights
hi("DiagnosticError", {fg: p.std.r, bg: p.bgWeaker.r});
hi("DiagnosticWarn", {fg: p.std.y, bg: p.bgWeaker.y});
hi("DiagnosticInfo", {fg: p.std.c, bg: p.bgWeaker.c});
hi("DiagnosticHint", {fg: p.std.b, bg: p.bgWeaker.b});
hi("DiagnosticOk", {fg: p.std.g, bg: p.bgWeaker.g});
hi("DiagnosticSignError", {fg: p.std.r, bg: NONE});
hi("DiagnosticSignWarn", {fg: p.std.y, bg: NONE});
hi("DiagnosticSignInfo", {fg: p.std.c, bg: NONE});
hi("DiagnosticSignHint", {fg: p.std.b, bg: NONE});
hi("DiagnosticSignOk", {fg: p.std.g, bg: NONE});
hi("DiagnosticUnderlineError", {fg: NONE, bg: NONE , undercurl: true, sp: p.std.r});
hi("DiagnosticUnderlineWarn", {fg: NONE, bg: NONE, undercurl: true, sp: p.std.y});
hi("DiagnosticUnderlineInfo", {fg: NONE, bg: NONE, undercurl: true, sp: p.std.c});
hi("DiagnosticUnderlineHint", {fg: NONE, bg: NONE, undercurl: true, sp: p.std.b});
hi("DiagnosticUnderlineOk", {fg: NONE, bg: NONE, undercurl: true, sp: p.std.g});

//Plugin highlights
hi("GitSignsAdd", {fg: p.std.g, bg: NONE});
hi("GitSignsChange", {fg: p.std.b, bg: NONE});
hi("GitSignsDelete", {fg: p.std.r, bg: NONE});

//Tofu (for cmdline cursor)
hi("CmdlineCursor", {fg: g[0], bg: g[15]});

console.log(
`}

for _, highlight in ipairs(highlights) do
    vim.api.nvim_set_hl(0, highlight.group, highlight.opts)
end`
)
