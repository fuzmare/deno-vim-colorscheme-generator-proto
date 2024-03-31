import {
  paletteHEX as p,
  grayHEX as g,
  fgHEX as fg,
  bgHEX as bg,
} from "./palette.ts"

console.log(
`[colors.bright]
black   = "${g[4]}"
red     = "${p.light.r}"
green   = "${p.light.g}"
yellow  = "${p.light.y}"
blue    = "${p.light.b}"
magenta = "${p.light.m}"
cyan    = "${p.light.c}"
white   = "${g[15]}"

[colors.normal]
black   = "${g[3]}"
red     = "${p.std.r}"
green   = "${p.std.g}"
yellow  = "${p.std.y}"
blue    = "${p.std.b}"
magenta = "${p.std.m}"
cyan    = "${p.std.c}"
white   = "${g[13]}"

[colors.primary]
background = "${bg}"
foreground = "${fg}"

[cursor]
style = "Underline"
thickness = 0.3

[font]
size = 11

[font.bold]
family = "Firge35 Nerd Console"

[font.italic]
family = "Firge35 Nerd Console"

[font.normal]
family = "Firge35 Nerd Console"

[shell]
program = "/usr/bin/tmux"

[window]
dynamic_title = true
`
)
