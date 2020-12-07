## Simple Learning Application

  Application allow you to calculate a tip

### Task:

Get all the different group size amounts amounts to update when the total is changed
If necessary, get useEffect and useRef to work correctly. (basic use of them)

### Details:

- Very simple react app to calculate tips, as in for meals, etc.

- App works. If amount is changed, all the various party size amount share of the 'bill' changes

- The grand total updates correctly when percentages are changed (by clicking on them)

- The 'underline' uses state and is updated correctly when percentages are changed

### Problem:

- The shared people amounts other than grand total are not updating when percentages change (by clicking them).
  When I change the amount all amount change, but when I click on the percentage values they do not (but total does).

### Notes:
  I have useEffect on line 79 but not configured correctly.  Currently useEffect is not doing anything (you can comment it out).
  I tried moving the code that sets values inside the useEffect but it got confusing, I had naming issues
