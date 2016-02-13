#! /bin/bash

OUT="REPORT.md"

(cat "README.md"; echo) > $OUT

for md in ./**/*.md
do
  (cat $md; echo) >> $OUT
done
