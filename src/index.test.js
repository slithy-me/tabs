import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Tabs, TabsList, TabsFrame, Tab, TabView } from 'componentLibrary/Tabs'

describe('<Tabs />', () => {
  it('displays the first tab by default', () => {
    const { getAllByText } = render(
      <Tabs>
        <TabsList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabsList>
        <TabsFrame>
          <TabView>
            <h1>Tab 1</h1>
          </TabView>
          <TabView>
            <h1>Tab 2</h1>
          </TabView>
          <TabView>
            <h1>Tab 3</h1>
          </TabView>
        </TabsFrame>
      </Tabs>
    )
    expect(getAllByText('Tab 1')).toHaveLength(2)
  })

  it('updates the view when a new tab is clicked', () => {
    const { getAllByText } = render(
      <Tabs>
        <TabsList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabsList>
        <TabsFrame>
          <TabView>
            <h1>Tab 1</h1>
          </TabView>
          <TabView>
            <h1>Tab 2</h1>
          </TabView>
          <TabView>
            <h1>Tab 3</h1>
          </TabView>
        </TabsFrame>
      </Tabs>
    )
    const [tab2] = getAllByText('Tab 2')
    expect(getAllByText('Tab 1')).toHaveLength(2)
    expect(getAllByText('Tab 2')).toHaveLength(1)
    fireEvent.click(tab2)
    expect(getAllByText('Tab 1')).toHaveLength(1)
    expect(getAllByText('Tab 2')).toHaveLength(2)
  })

  it('renders the correct content for the defaultTab prop, using index', () => {
    const { getAllByText } = render(
      <Tabs defaultTab={2}>
        <TabsList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabsList>
        <TabsFrame>
          <TabView>
            <h1>Tab 1</h1>
          </TabView>
          <TabView>
            <h1>Tab 2</h1>
          </TabView>
          <TabView>
            <h1>Tab 3</h1>
          </TabView>
        </TabsFrame>
      </Tabs>
    )
    expect(getAllByText('Tab 3')).toHaveLength(2)
  })

  it('renders the correct content for the defaultTab prop, using id', () => {
    const { getAllByText } = render(
      <Tabs defaultTab="tab2">
        <TabsList>
          <Tab tabName="tab1">Tab 1</Tab>
          <Tab tabName="tab2">Tab 2</Tab>
          <Tab tabName="tab3">Tab 3</Tab>
        </TabsList>
        <TabsFrame>
          <TabView forTab="tab1">
            <h1>Tab 1</h1>
          </TabView>
          <TabView forTab="tab2">
            <h1>Tab 2</h1>
          </TabView>
          <TabView forTab="tab3">
            <h1>Tab 3</h1>
          </TabView>
        </TabsFrame>
      </Tabs>
    )
    expect(getAllByText('Tab 2')).toHaveLength(2)
  })

  it('renders tabs when using the `label` prop', () => {
    const { getAllByText } = render(
      <Tabs>
        <TabsList>
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
        </TabsList>
        <TabsFrame>
          <TabView>
            <h1>Tab 1</h1>
          </TabView>
          <TabView>
            <h1>Tab 2</h1>
          </TabView>
        </TabsFrame>
      </Tabs>
    )
    expect(getAllByText('Tab 1')).toHaveLength(2)
  })
})
