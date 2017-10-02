# LA CROIX TARDIGRADE

The next logical place for Cozy

Over time, when slightly adjusting our templates for Cozy, the initial concept of it has gotten a little lost, or 'evolved' - this is what i envisage as the next point.

We're now working with How It Works areas, multiple types of prize counter, multiple instances and designs of the share-utility and sometimes-arrowed-sometimes-not sections

This adds some additional complexity to our diverse range of campaigns, and naturally also adds some development overhead.

LCT is principled around 'doing the right thing once' - the hope being that we can move to a templated system from a solid base, as we did with cozy - but with the longterm goal of moving to shared markup across campaigns that share elements. This should make development less confusing, and hopefully further reduce bug-fixing time.

This app is a small prototype of what can be done with 'flavouring' markup (having one instance of markup but several stylesheets)

----

obvo you need to run `npm i` and `gulp dev` to get yr dest folder poppin

you can also change the flavour by changing this line in `style.styl`

`@import 'flavours/dark/*';`

to

`@import 'flavours/light/*';`
