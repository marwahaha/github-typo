# only uses files with wc -l nonzero
mkdir -p cleaned
wc -l urls/* | sed '$d' |  awk '{$1=$1};1' | grep -v "^0" | sed 's/.*urls\///' | while read -r line; do ./clean.sh urls/$line > cleaned/$line; done