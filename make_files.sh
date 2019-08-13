## https://en.wikipedia.org/wiki/Wikipedia:Lists_of_common_misspellings/For_machines
mkdir -p urls
cat $1  | while read -r line; do touch urls/$(echo $line |  sed 's/->/./' | sed 's/ /,/g'); done