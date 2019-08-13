# gets lines with links in them
# trims whitespace and quotes/commas
# converts url to master banch
# removes orthographic pedant
cat $1 | grep '"https'  | awk '{$1=$1};1' | sed 's/^"//' | sed 's/",*$//' | sed 's/\/blob\/.*\//\/blob\/master\//' | sort | uniq | grep -v "orthographic-pedant"
