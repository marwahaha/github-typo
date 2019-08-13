cat $1 | jq 'keys' | grep -v '\[' | grep -v '\]' | awk '{$1=$1};1' | sed 's/",*$//' | sed 's/^"//' | while read -r line; do jq .$line $1 > $(ls urls/$line.*); done 
