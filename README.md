ice-cream
=========

Dead simple de-assertion script.

Because Uglify's DCE is less than optimal and Closure is hard to use.

Usage
-----

Remove `assert(expensiveCall());`:

    ./ice-cream foo.js

Remove `assert`, `trace`, `vtrace`:

    ./ice-cream foo.js --remove trace --remove vtrace
