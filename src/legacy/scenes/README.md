These files are archived engine experiments and old demo scenes.

They are intentionally kept out of the default package surface and out of the
renderer-focused integration path for downstream projects.

If one of these scenes becomes useful again, treat it as legacy code and port
the needed parts into `test/` or a new stable runtime module instead of wiring
new code against this folder directly.
