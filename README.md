# aria-activedescendant-static-dynamic

Created with CodeSandbox

Testing whether `aria-activedescendant` needs to be dynamic or can be static.
Check the [implementation](https://github.com/eps1lon/aria-activedescendant-static-dynamic/blob/HEAD/src/App.js) and [live app](https://aria-activedescendant-static-dynamic.vercel.app/) for more information.

## Results

All experiments were performed on <time dateTime="2021-05-30">30th May 2021</time> with a production build of this app.

### Screen readers

Screen reader + browser combination was chosen based on what screen readers I'm familiar with/have access to (NVDA, JAWS, VoiceOver) and their most popular browser combination according to [WebAIM Screen Reader User Survey #8](https://webaim.org/projects/screenreadersurvey8).

#### NVDA + Firefox

<table>
  <caption>environment</caption>
  <thead>
    <tr>
      <th>name</th>
      <th>version</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Windows</td>
      <td>Version 10.0.19041 Build 19041</td>
    </tr>
    <tr>
      <td>NVDA</td>
      <td>2020.04</td>
    </tr>
    <tr>
      <td>Firefox</td>
      <td>88.0.1</td>
    </tr>
  </tbody>
</table>

<table>
  <caption>recording for dynamic aria-activedescendant</caption>
  <thead>
    <tr>
      <th>Action</th>
      <th>Speech</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Press tab</td>
      <td>'dynamic aria-activedescendant  list', 'alpha  1 of 5'</td>
    </tr>
    <tr>
      <td>
        Press <kbd>ArrowDown</kbd>
      </td>
      <td>'beta  2 of 5'</td>
    </tr>
    <tr>
      <td>
        Press <kbd>ArrowDown</kbd>
      </td>
      <td>'gamma  3 of 5'</td>
    </tr>
    <tr>
      <td>
        Press <kbd>ArrowUp</kbd>
      </td>
      <td>'beta  2 of 5'</td>
    </tr>
    <tr>
      <td>
        Press <kbd>Home</kbd>
      </td>
      <td>'alpha  1 of 5'</td>
    </tr>
    <tr>
      <td>
        Press <kbd>End</kbd>
      </td>
      <td>'epsilon  5 of 5'</td>
    </tr>
  </tbody>
</table>

<table>
  <caption>recording for static aria-activedescendant</caption>
  <thead>
    <tr>
      <th>Action</th>
      <th>Speech</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Press tab</td>
      <td>'static aria-activedescendant  list', 'alpha  1 of 5'</td>
    </tr>
    <tr>
      <td>
        Press <kbd>ArrowDown</kbd>
      </td>
      <td>'beta  2 of 5'</td>
    </tr>
    <tr>
      <td>
        Press <kbd>ArrowDown</kbd>
      </td>
      <td>'gamma  3 of 5'</td>
    </tr>
    <tr>
      <td>
        Press <kbd>ArrowUp</kbd>
      </td>
      <td>'beta  2 of 5'</td>
    </tr>
    <tr>
      <td>
        Press <kbd>Home</kbd>
      </td>
      <td>'alpha  1 of 5'</td>
    </tr>
    <tr>
      <td>
        Press <kbd>End</kbd>
      </td>
      <td>'epsilon  5 of 5'</td>
    </tr>
  </tbody>
</table>

#### JAWS + Chrome

<table>
  <caption>environment</caption>
  <thead>
    <tr>
      <th>name</th>
      <th>version</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Windows</td>
      <td>Version 10.0.15063 Build 15063</td>
    </tr>
    <tr>
      <td>JAWS</td>
      <td>2019.1909.28</td>
    </tr>
    <tr>
      <td>Chrome</td>
      <td>91.0.4472.77</td>
    </tr>
  </tbody>
</table>

<table>
  <caption>recording for dynamic aria-activedescendant</caption>
  <thead>
    <tr>
      <th>Action</th>
      <th>Speech</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Press tab</td>
      <td>dynamic aria-activedescendant listbox alpha 1 of 5</td>
    </tr>
    <tr>
      <td>
        Press <kbd>ArrowDown</kbd>
      </td>
      <td>beta 2 of 5</td>
    </tr>
    <tr>
      <td>
        Press <kbd>ArrowDown</kbd>
      </td>
      <td>gamma 3 of 5</td>
    </tr>
    <tr>
      <td>
        Press <kbd>ArrowUp</kbd>
      </td>
      <td>beta 2 of 5</td>
    </tr>
    <tr>
      <td>
        Press <kbd>Home</kbd>
      </td>
      <td>alpha 1 of 5</td>
    </tr>
    <tr>
      <td>
        Press <kbd>End</kbd>
      </td>
      <td>epsilon 5 of 5</td>
    </tr>
  </tbody>
</table>

<table>
  <caption>recording for static aria-activedescendant</caption>
  <thead>
    <tr>
      <th>Action</th>
      <th>Speech</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Press tab</td>
      <td>static aria-activedescendant listbox alpha 1 of 5</td>
    </tr>
    <tr>
      <td>
        Press <kbd>ArrowDown</kbd>
      </td>
      <td>beta 2 of 5</td>
    </tr>
    <tr>
      <td>
        Press <kbd>ArrowDown</kbd>
      </td>
      <td>gamma 3 of 5</td>
    </tr>
    <tr>
      <td>
        Press <kbd>ArrowUp</kbd>
      </td>
      <td>beta 2 of 5</td>
    </tr>
    <tr>
      <td>
        Press <kbd>Home</kbd>
      </td>
      <td>alpha 1 of 5</td>
    </tr>
    <tr>
      <td>
        Press <kbd>End</kbd>
      </td>
      <td>epsilon 5 of 5</td>
    </tr>
  </tbody>
</table>

#### VoiceOver + Safari

<table>
  <caption>environment</caption>
  <thead>
    <tr>
      <th>name</th>
      <th>version</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MacOS</td>
      <td>10.15.7 (19H1030)</td>
    </tr>
    <tr>
      <td>VoiceOver</td>
      <td>??</td>
    </tr>
    <tr>
      <td>Safari</td>
      <td>14.0.3 (15610.4.3.1.7, 15610)</td>
    </tr>
  </tbody>
</table>

<table>
  <caption>recording for dynamic aria-activedescendant</caption>
  <thead>
    <tr>
      <th>Action</th>
      <th>Speech</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Press tab</td>
      <td>entering dynamic aria-activedescendant listbox, alpha, text (1 of 5)</td>
    </tr>
    <tr>
      <td>
        Press <kbd>ArrowDown</kbd>
      </td>
      <td>beta, text (2 of 5)</td>
    </tr>
    <tr>
      <td>
        Press <kbd>ArrowDown</kbd>
      </td>
      <td>gamma, text (3 of 5)</td>
    </tr>
    <tr>
      <td>
        Press <kbd>ArrowUp</kbd>
      </td>
      <td>beta, text (2 of 5)</td>
    </tr>
  </tbody>
</table>

<table>
  <caption>recording for static aria-activedescendant</caption>
  <thead>
    <tr>
      <th>Action</th>
      <th>Speech</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Press tab</td>
      <td>entering static aria-activedescendant listbox, alpha, text (1 of 5)</td>
    </tr>
    <tr>
      <td>
        Press <kbd>ArrowDown</kbd>
      </td>
      <td>beta, text (2 of 5)</td>
    </tr>
    <tr>
      <td>
        Press <kbd>ArrowDown</kbd>
      </td>
      <td>gamma, text (3 of 5)</td>
    </tr>
    <tr>
      <td>
        Press <kbd>ArrowUp</kbd>
      </td>
      <td>beta, text (2 of 5)</td>
    </tr>
  </tbody>
</table>

## Conclusion

The output of the tested screen reader + browser combinations is unaffected by whether `aria-activedescendant` is static or dynamic.
