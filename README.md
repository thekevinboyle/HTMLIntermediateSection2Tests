# Austin Code Academy
## HTML Intermediate Tests

### Quickstart
#### Set up
1. Be sure to have [Node.js](https://nodejs.org/) installed.
2. Type `sudo npm install -g mocha` in your terminal

#### Run a single test
1. Navigate into individual lesson folder (eg.`cd LessonOne/`)
2. Run `mocha` in your terminal.
3. Edit lesson script (eg. _LessonOne.js_) to make the tests pass!

#### Run all tests
1. Simply run `npm test`

### Longstart
#### Let's pass some tests!
Tests are a great way to make sure you code works the way you planned it would, and to make sure you don't break something in the future. We will be using them to test our understanding of the lesson.

1. Our test repository is located at https://github.com/mistakevin/acatests.
2. Click the 'Fork' button (choose your account if prompted). 
3. Once forked, repeat steps 3 - 7 above.
4. Type `sudo npm install -g mocha` in your terminal. Enter your password if prompted.
5. Navigate into LessonZero in your terminal (`cd LessonZero`)
6. Run `mocha`
7. Watch the test fail test fail :(
8. Change the `return false;` statement to `return true;`
9. Run `mocha` again and watch the test pass!

#### Lesson One Tests
1. Navigate into the LessonOne directory
2. Run `mocha` and watch the tests fail :(
3. In Sublime Text, open _LessonOne.js_ `subl LessonOne.js`
4. Below each comment with the specs, try to do what it is asking. Be sure to always `return` your answer.
5. You can also look at the tests in `test/LessonOneTest.js` to try and read the test examples.
6. Run `mocha` after each attempt to see if the tests pass.
7. When finished, commit your changes and push to GitHub
```bash
git status
git add LessonOne.js
git commit -m "Tests passing!"
git push origin master
```
.8. Now go to your forked repository on GitHub. A little yellow box should have popped up asking you to make a Pull Request. Click to review.
.9. Click "Create Pull Request"
