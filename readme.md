# github-typo
I found repositories on GitHub that had common spelling mistakes and opened pull requests to fix them!

All pull requests were submitted manually, since a [typo-fixing GitHub robot was taken down](https://github.com/thoppe/orthographic-pedant/blob/master/messages/dead_msg.md) for unsolicited automated contact.

Eventually, I was asked to stop making pull requests because of the scale of unsolicited contact.

[Here's a link to all pull requests I made](https://github.com/pulls?q=is%3Apr+author%3Amarwahaha+archived%3Afalse+created%3A2019-07-05..2019-08-05+is%3Aopen) as part of this project.

If you want to see which projects may still have typos, you can look in the `cleaned/` directory, or do a search on GitHub yourself!

## The process

I was searching and fixing typos randomly for awhile. Eventually, I built this process to help find projects with typos.

1. Get word misspellings from [Wikipedia's list of common misspellings](https://en.wikipedia.org/wiki/Wikipedia:Lists_of_common_misspellings/For_machines).
> I copied this to `words.txt`.

2. Make empty files where project URLs will go:
```
./make_files.sh words.txt
```

3. Confirm there are no duplicate files.
```
ls urls/ | wc -l
    4281
wc -l words.txt
    4281 words.txt
```
4. This generates a list of search URLs on GitHub, one for each misspelled word.
```
./make_search_urls.sh > search_urls.txt
```
5. I convert the search URLs into a JavaScript array.
```
./make_urlsjs.sh
```
6. For each URL, I go to GitHub and get a link to each project result.
> You can visit a GitHub search page, copy `urls.js` and `browser.js` into the browser console, and execute `runall(0,5000)`.

> This takes 4-6 seconds per page of results. GitHub has at most 100 pages of results (i.e. max 5 minutes per search).

7. Periodically, I copy all search results to the clipboard: `copy(alldata)` in Chrome. I then save it to a file in `checkpoints/`.

8. Convert the `alldata` JavaScript object into links in the files in `urls/`:
```
./save_alldata.sh checkpoints/alldata.checkpoint.8 # (words 1 - ~1000)
./save_alldata.sh checkpoints/alldata.checkpoint.1000s # (words ~1000 - ~1400)
./save_alldata.sh checkpoints/alldata.checkpoint.1400s # (words ~1400 - ~1810)
./save_alldata.sh checkpoints/alldata.checkpoint.1800s # (words ~1810 - ~2331)
./save_alldata.sh checkpoints/alldata.checkpoint.2300s # (words ~2331 - ~2650)
./save_alldata.sh checkpoints/alldata.checkpoint.2650s # (words ~2650 - ~3416)
./save_alldata.sh checkpoints/alldata.checkpoint.3400s # (words ~3416 - ~4068)
./save_alldata.sh checkpoints/alldata.checkpoint.4000s # (words ~4068 - ~4282)
```

> There is a bug with a couple words (they have hyphens or apostrophes). Oh well :(

9. See how many files have any project links:
./num_nonempty_files.sh urls/

10. I "clean" each project link to get on the `master` branch of the project, trim the whitespace, and so on. New lists are stored in `cleaned/`.
```
rm -rf cleaned/
./clean_all.sh
```

> There will still be some empty files in cleaned, but that's ok.

11. You can see the number of (potential) project links:
```
wc -l cleaned/* | sort -n
```

> When I ran this in July 2019, there were ~650,000 projects that might have a typo!

12. For each file, you can open all project links in Chrome to inspect each one, and make a pull request on GitHub!
```
# for example
./open_in_chrome.sh cleaned/abbout.about
```

> You still have to check the URL works and the typo is still (unintentionally) on the page. Otherwise you're not helping!

## The progress
It took about 10 minutes for each 50 pages I inspected on Chrome (many of them did not need any pull requests).

Overall, I submitted about 1000 pull requests, and about 250 of them were merged.

These were the files I inspected manually:
* abandonned.abandoned
* abbout.about
* aberation.aberration
* abilityes.abilities
* abilties.abilities
* abilty.ability
* abondon.abandon
* abondoned.abandoned
* abondoning.abandoning
* abondons.abandons
* aborigene.aborigine
* abortificant.abortifacient
* abotu.about
* abouta.about,a
* aboutit.about,it
* aboutthe.about,the
* abreviate.abbreviate
* abreviated.abbreviated
* abreviation.abbreviation
* abritrary.arbitrary (first 150 lines)

## The end
After a few weeks of manually submitting pull requests (about 300 per week), my account was flagged on GitHub. It took several days to be reinstated, but I had to promise to not fix typos on this scale again :-)

Here's the correspondence with GitHub support:

```
Kunal Marwaha

Aug 11, 10:46 PM UTC

Thank you!
```
```
Avery (GitHub Developer Support)

Aug 11, 4:40 PM UTC

Hi Kunal,

Thanks for confirming that for us. We’ve removed the flag from your account. Please note that should we receive further reports of similar activity in the future, we may need to re-flag your account.

All best,

Avery
```
```
Kunal Marwaha

Aug 9, 6:24 PM UTC

Hi Rory,

Thanks for getting back to me.
This was not a "service". I was making pull requests against personal projects on GitHub -- most people appreciated the changes and merged them in!
This was just a pastime to help people with their English.
Unfortunately, because I am flagged, I cannot see which PRs I have made, so I cannot close them: https://github.com/pulls.
But I am certainly happy to stop going forward.
Hopefully this is enough, can you reinstate me ?

Kunal
```
```
Rory (GitHub Developer Support)

Aug 9, 6:13 AM UTC

Hello,

Thanks for contacting us.

Your account was flagged for creating multiple unsolicited pull requests in other users' repositories. We are a code hosting service and collaboration tool for software developers, and this activity violates our Terms of Service. We'll have to keep your account flagged for now.

If you'd be willing to close the pull requests, and if you agree to making your typo correction service an opt-in program, we'd be happy to consider reinstating your account.

Thanks,
Rory
```
```
Kunal Marwaha

Aug 7, 5:04 AM UTC

Hi all, I've been flagged for some reason. I'm a real person and I personally make my own contributions on GitHub.com . I love this site and try to contribute wherever I can. I post my own projects, maintain a popular open-source library (https://github.com/moment/moment) and help others out. Already this flag has caused confusion for the library (https://github.com/moment/moment/issues/5188) . Could I be marked as public again?
```

## Beyond?
Overall, I think cleaning up documentation is a really neat way to get involved with an open-source project. This includes fixing typos!

Although [most project owners were very appreciative](https://github.com/pulls?q=is%3Apr+author%3Amarwahaha+archived%3Afalse+created%3A2019-07-05..2019-08-05+is%3Aclosed), I've learned that not all projects on GitHub want attention.

> I wonder if it's like leaving things outside your house. Sometimes, you stack your items neatly with a "free stuff" sign. Other times, it's your basketball hoop, and you don't want anyone messing with it.

If you have more questions about the project or want to improve on it in some way, please get in touch! I'm at `marwahaha@berkeley.edu`.

Here's a link to the [GitHub Terms of Service](https://help.github.com/en/articles/github-terms-of-service).

