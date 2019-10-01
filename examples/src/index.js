import React from 'react'
import { render } from 'react-dom'
import { Tabs, TabsList, TabsFrame, Tab, TabView } from '../../src'

const App = () => (
  <>
    <Tabs>
      <h1>I am Tabs.</h1>

      <TabsList>
        <Tab>Tab #1</Tab>
        <Tab>Tab #2</Tab>
      </TabsList>

      <TabsFrame>
        <TabView>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel tempus mi, eget hendrerit odio. Duis scelerisque consequat sapien, id vestibulum augue euismod sit amet. Nullam non interdum quam. Phasellus nunc nulla, placerat at neque in, placerat suscipit orci. Suspendisse ac euismod mi. Maecenas eget faucibus purus, at accumsan lacus. Nunc blandit urna lacus, at porta neque laoreet sit amet. Ut ac velit nec tellus aliquet iaculis. Aliquam placerat ligula turpis, in tristique arcu volutpat pellentesque. Aliquam arcu urna, efficitur in hendrerit molestie, posuere in sem. Aliquam ac suscipit lacus. Curabitur auctor, mauris et ultrices dapibus, metus mi consequat mauris, in pulvinar lacus augue at ante. Proin vel mauris et metus varius tincidunt. Morbi tortor ipsum, bibendum a pharetra id, ultrices ac leo. Pellentesque tempus lectus turpis, in vehicula magna auctor vitae. Nunc finibus pellentesque urna in fermentum.</p>
        </TabView>
        <TabView>
          <p>Suspendisse nec pellentesque ipsum. Duis at libero sed nulla varius volutpat eu quis risus. Sed eu porta nisl. Aenean vulputate metus egestas tortor dignissim, ut rutrum dolor volutpat. Cras quis egestas neque. Mauris nulla dui, facilisis quis iaculis eget, sodales et ligula. Sed sed lectus a metus pharetra laoreet volutpat a sem.</p>
        </TabView>
      </TabsFrame>
    </Tabs>

    <Tabs updateUrlHash>
      <h1>I am Tabs w/ Name.</h1>

      <TabsList>
        <Tab tabName="tab1">Tab #1</Tab>
        <Tab tabName="tab2">Tab #2</Tab>
        <Tab tabName="tab3">Tab #3</Tab>
        <Tab>Tab #4</Tab>
      </TabsList>

      <TabsFrame>
        <TabView forTab="tab1">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel tempus mi, eget hendrerit odio. Duis scelerisque consequat sapien, id vestibulum augue euismod sit amet. Nullam non interdum quam. Phasellus nunc nulla, placerat at neque in, placerat suscipit orci. Suspendisse ac euismod mi. Maecenas eget faucibus purus, at accumsan lacus. Nunc blandit urna lacus, at porta neque laoreet sit amet. Ut ac velit nec tellus aliquet iaculis. Aliquam placerat ligula turpis, in tristique arcu volutpat pellentesque. Aliquam arcu urna, efficitur in hendrerit molestie, posuere in sem. Aliquam ac suscipit lacus. Curabitur auctor, mauris et ultrices dapibus, metus mi consequat mauris, in pulvinar lacus augue at ante. Proin vel mauris et metus varius tincidunt. Morbi tortor ipsum, bibendum a pharetra id, ultrices ac leo. Pellentesque tempus lectus turpis, in vehicula magna auctor vitae. Nunc finibus pellentesque urna in fermentum.</p>
        </TabView>
        <TabView forTab="tab2">
          <p>Suspendisse nec pellentesque ipsum. Duis at libero sed nulla varius volutpat eu quis risus. Sed eu porta nisl. Aenean vulputate metus egestas tortor dignissim, ut rutrum dolor volutpat. Cras quis egestas neque. Mauris nulla dui, facilisis quis iaculis eget, sodales et ligula. Sed sed lectus a metus pharetra laoreet volutpat a sem.</p>
        </TabView>
        <TabView forTab="tab3">
          <p>Morbi commodo nulla in lacus gravida, id accumsan magna faucibus. Morbi eros purus, rutrum a aliquam tempus, laoreet at orci. Aliquam a nisi vel felis dignissim gravida. Morbi elit nunc, mattis non porta et, pellentesque sed lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In euismod sagittis mauris, sit amet luctus metus laoreet at. Aenean velit diam, bibendum sed ex et, pretium hendrerit nulla. Curabitur condimentum ut ante ac aliquam. In vel quam nec nibh fermentum tempus in sit amet neque. Aenean consequat commodo ipsum, ut tempor nunc. Donec vel gravida ligula, eget sollicitudin risus. Morbi varius diam quis ex tempor, et tempor turpis tincidunt. Suspendisse tempor felis tellus, quis tincidunt mauris elementum nec. Integer commodo massa nec ante eleifend facilisis. Nulla quis risus rhoncus, interdum est a, lacinia nibh. Praesent odio ante, lacinia tempor odio id, porta facilisis nulla.</p>
        </TabView>
        <TabView>
          <p>This tab has no name, and therefore REMOVES the URL hash.</p>
        </TabView>
        <TabView forTabs={['tab1', 'tab3']}>
          <p>Here's an extra tab that should display with Tabs #1 and #3.</p>
        </TabView>
      </TabsFrame>
    </Tabs>
  </>
)

render(<App />, document.getElementById('root'))
