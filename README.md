# Austin Code Academy
## HTML Intermediate Tests

### Quickstart
#### Set up
1. Be sure to have [Node.js](https://nodejs.org/) installed.
2. Type `sudo npm install -g mocha` in your terminal

#### Run a single test
1. Navigate into individual lesson folder (eg.`cd 00LessonZero/`)
2. Run `mocha` in your terminal to run the tests.
3. Edit lesson script (eg. _LessonZero.js_) to make the tests pass!

#### Run all tests
1. Simply run `npm test`

### Longstart
#### Let's pass some tests!
Tests are a great way to make sure you code works the way you planned it would, and to make sure you don't break something in the future. We will be using them to test our understanding of the lesson.

1. Our test repository is located at https://github.com/AustinCodingAcademy/HTMLIntermediateSection2Tests.
2. Click the 'Fork' button (choose your account if prompted).
3. Once forked, repeat steps 3 - 7 above.
4. Type `sudo npm install -g mocha` in your terminal. Enter your password if prompted.
5. Navigate into 00LessonZero in your terminal (`cd 00LessonZero`)
6. Run `mocha`
7. Watch the test fail :(
7. Open `LessonZero.js`.
8. Change the `return false;` statement to `return true;`
9. Run `mocha` again and watch the test pass!

#### Tips
1. Below each comment with the specs, try to do what it is asking. Be sure to always `return` your answer.
2. You can also look at the tests in `test/LessonOneTest.js` to try and read the test examples.
3. Run `mocha` after each attempt to see if the tests pass.

#### Push to Github and create a PR
1. When finished, commit your changes and push to GitHub
```bash
git status
git add LessonZero.js
git commit -m "Lesson Zero Tests passing!"
git push origin master
```
.2. Now go to your forked repository on GitHub. A little yellow box should have popped up asking you to make a Pull Request. Click to review.

.3. Click "Create Pull Request"

.4. Everytime you make a change and push to GitHub, this PR will automatically update. No need to do it more than once.
