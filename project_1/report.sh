#! /bin/bash

OUT="REPORT.md"

for md in ./**/*.md
do
  (cat $md; echo) >> $OUT
done
