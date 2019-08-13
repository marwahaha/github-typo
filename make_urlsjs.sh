echo "var searchurls = [" > urls.js
cat search_urls.txt | sed 's/$/",/' | sed 's/^/"/' >> urls.js
echo "]" >> urls.js