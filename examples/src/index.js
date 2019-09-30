import React from 'react'
import { render } from 'react-dom'
import { Tabs, TabsList, TabsFrame, Tab, TabView } from '../../src'

const App = () => (
  <Tabs>
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
)

render(<App />, document.getElementById('root'))
