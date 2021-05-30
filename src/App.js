import { Fragment, unstable_useOpaqueIdentifier, useReducer } from "react";
import "./styles.css";

/**
 * Implements the listbox pattern.
 * The `aria-activedescendant` attribute does changes while the ids attributes of the options are static.
 */
function DynamicAriaActiveDescendantListobx(props) {
  const optionIds = [
    unstable_useOpaqueIdentifier(),
    unstable_useOpaqueIdentifier(),
    unstable_useOpaqueIdentifier(),
    unstable_useOpaqueIdentifier(),
    unstable_useOpaqueIdentifier()
  ];
  const optionCount = optionIds.length;
  const [activeIndex, changeActiveIndexBy] = useReducer(
    (currentActiveIndex, step) => {
      return (currentActiveIndex + step + optionCount) % optionCount;
    },
    0
  );

  function handleKeyDown(event) {
    let step = null;
    switch (event.key) {
      case "ArrowDown":
        step = +1;
        break;
      case "ArrowUp":
        step = -1;
        break;
      case "Home":
        step = -activeIndex;
        break;
      case "End":
        step = optionCount - 1 - activeIndex;
        break;
      default:
        // nothing
        break;
    }

    if (step !== null) {
      event.preventDefault();
      changeActiveIndexBy(step);
    }
  }

  return (
    <ul
      role="listbox"
      aria-activedescendant={optionIds[activeIndex]}
      aria-labelledby={props["aria-labelledby"]}
      onKeyDown={handleKeyDown}
      tabIndex="0"
    >
      <li role="option" aria-selected={activeIndex === 0} id={optionIds[0]}>
        alpha
      </li>
      <li role="option" aria-selected={activeIndex === 1} id={optionIds[1]}>
        beta
      </li>
      <li role="option" aria-selected={activeIndex === 2} id={optionIds[2]}>
        gamma
      </li>
      <li role="option" aria-selected={activeIndex === 3} id={optionIds[3]}>
        delta
      </li>
      <li role="option" aria-selected={activeIndex === 4} id={optionIds[4]}>
        epsilon
      </li>
    </ul>
  );
}

/**
 * Implements the listbox pattern.
 * The `aria-activedescendant` attribute does not change while the ids attributes of the options change.
 */
function StaticAriaActiveDescendantListobx(props) {
  const activeDescendantId = unstable_useOpaqueIdentifier();
  const optionCount = 5;
  const [activeIndex, changeActiveIndexBy] = useReducer(
    (currentActiveIndex, step) => {
      return (currentActiveIndex + step + optionCount) % optionCount;
    },
    0
  );

  function handleKeyDown(event) {
    let step = null;
    switch (event.key) {
      case "ArrowDown":
        step = +1;
        break;
      case "ArrowUp":
        step = -1;
        break;
      case "Home":
        step = -activeIndex;
        break;
      case "End":
        step = optionCount - 1 - activeIndex;
        break;
      default:
        // nothing
        break;
    }

    if (step !== null) {
      event.preventDefault();
      changeActiveIndexBy(step);
    }
  }

  return (
    <ul
      role="listbox"
      aria-activedescendant={activeDescendantId}
      aria-labelledby={props["aria-labelledby"]}
      onKeyDown={handleKeyDown}
      tabIndex="0"
    >
      <li
        role="option"
        aria-selected={activeIndex === 0}
        id={activeIndex === 0 ? activeDescendantId : undefined}
      >
        alpha
      </li>
      <li
        role="option"
        aria-selected={activeIndex === 1}
        id={activeIndex === 1 ? activeDescendantId : undefined}
      >
        beta
      </li>
      <li
        role="option"
        aria-selected={activeIndex === 2}
        id={activeIndex === 2 ? activeDescendantId : undefined}
      >
        gamma
      </li>
      <li
        role="option"
        aria-selected={activeIndex === 3}
        id={activeIndex === 3 ? activeDescendantId : undefined}
      >
        delta
      </li>
      <li
        role="option"
        aria-selected={activeIndex === 4}
        id={activeIndex === 4 ? activeDescendantId : undefined}
      >
        epsilon
      </li>
    </ul>
  );
}

export default function App() {
  const staticID = unstable_useOpaqueIdentifier();
  const dynamicID = unstable_useOpaqueIdentifier();

  return (
    <div className="App">
      <h1>Static vs dynamic aria-acivedescendant</h1>
      <h2>Implementations</h2>
      <p>
        Both listboxes implement <kbd>ArrowUp</kbd>, <kbd>ArrowDown</kbd>,{" "}
        <kbd>Home</kbd>, and <kbd>End</kbd> as described in{" "}
        <a href="https://www.w3.org/TR/wai-aria-practices/#listbox_kbd_interaction">
          Listbox in WAI-ARIA authoring practices 1.1.
        </a>
        .
      </p>
      <h3 id={dynamicID}>dynamic aria-activedescendant</h3>
      <p>
        <code>aria-activedescant</code> changes to the id of the static{" "}
        <code>id</code> of the currently active <code>option</code>.
      </p>
      <p>
        This is how <code>aria-activedescendant</code> is commonly documented.
      </p>
      <DynamicAriaActiveDescendantListobx aria-labelledby={dynamicID} />
      <h3 id={staticID}>static aria-activedescendant</h3>
      <p>
        <code>aria-activedescant</code> is static and the currently active{" "}
        <code>option</code> takes that <code>id</code> i.e. <code>id</code> of{" "}
        <code>option</code> is dynamic.
      </p>
      <StaticAriaActiveDescendantListobx aria-labelledby={staticID} />
      <h2>results</h2>
      <p>
        All experiments were performed on{" "}
        <time dateTime="2021-05-30">30th May 2021</time> with a production build
        of this app.
      </p>
      <h3>Screen readers</h3>
      <p>
        Screen reader + browser combination was chosen based on what screen
        readers I'm familiar with/have access to (NVDA, JAWS, VoiceOver) and
        their most popular browser combination according to{" "}
        <a href="https://webaim.org/projects/screenreadersurvey8/">
          WebAIM Screen Reader User Survey #8
        </a>
        .
      </p>
      <h3>NVDA + Firefox</h3>
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
            <td>NVDA</td>
            <td>2020.04</td>
          </tr>
          <tr>
            <td>Firefox</td>
            <td>88.0.1</td>
          </tr>
        </tbody>
      </table>
      <SpeechResults
        speechDynamic={[
          "'dynamic aria-activedescendant  list', 'alpha  1 of 5'",
          "'beta  2 of 5'",
          "'gamma  3 of 5'",
          "'beta  2 of 5'",
          "'alpha  1 of 5'",
          "'epsilon  5 of 5'"
        ]}
        speechStatic={[
          "'static aria-activedescendant  list', 'alpha  1 of 5'",
          "'beta  2 of 5'",
          "'gamma  3 of 5'",
          "'beta  2 of 5'",
          "'alpha  1 of 5'",
          "'epsilon  5 of 5'"
        ]}
      />
      <h3>JAWS + Chrome</h3>
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
            <td>JAWS</td>
            <td>??</td>
          </tr>
          <tr>
            <td>Chrome</td>
            <td>??</td>
          </tr>
        </tbody>
      </table>
      <SpeechResults speech={[]} />
      <h3>VoiceOver + Safari</h3>
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
            <td>VoiceOver</td>
            <td>??</td>
          </tr>
          <tr>
            <td>Safari</td>
            <td>??</td>
          </tr>
        </tbody>
      </table>
      <SpeechResults speech={[]} />
    </div>
  );
}

function SpeechResults({ speechDynamic = [], speechStatic = [] }) {
  return (
    <Fragment>
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
            <td>{speechDynamic[0] ?? "??"}</td>
          </tr>
          <tr>
            <td>
              Press <kbd>ArrowDown</kbd>
            </td>
            <td>{speechDynamic[1] ?? "??"}</td>
          </tr>
          <tr>
            <td>
              Press <kbd>ArrowDown</kbd>
            </td>
            <td>{speechDynamic[2] ?? "??"}</td>
          </tr>
          <tr>
            <td>
              Press <kbd>ArrowUp</kbd>
            </td>
            <td>{speechDynamic[3] ?? "??"}</td>
          </tr>
          <tr>
            <td>
              Press <kbd>Home</kbd>
            </td>
            <td>{speechDynamic[4] ?? "??"}</td>
          </tr>
          <tr>
            <td>
              Press <kbd>End</kbd>
            </td>
            <td>{speechDynamic[5] ?? "??"}</td>
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
            <td>{speechStatic[0] ?? "??"}</td>
          </tr>
          <tr>
            <td>
              Press <kbd>ArrowDown</kbd>
            </td>
            <td>{speechStatic[1] ?? "??"}</td>
          </tr>
          <tr>
            <td>
              Press <kbd>ArrowDown</kbd>
            </td>
            <td>{speechStatic[2] ?? "??"}</td>
          </tr>
          <tr>
            <td>
              Press <kbd>ArrowUp</kbd>
            </td>
            <td>{speechStatic[3] ?? "??"}</td>
          </tr>
          <tr>
            <td>
              Press <kbd>Home</kbd>
            </td>
            <td>{speechStatic[4] ?? "??"}</td>
          </tr>
          <tr>
            <td>
              Press <kbd>End</kbd>
            </td>
            <td>{speechStatic[5] ?? "??"}</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
}
