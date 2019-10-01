import './style'
import React, {
  Children, cloneElement, createContext,
  useContext, useEffect, useState,
} from 'react'
import PropTypes from 'prop-types'

const useLocationHash = () => {
  const removeLocationHash = () => {
    var noHashURL = window.location.href.replace(/#.*$/, '');
    window.history.replaceState('', document.title, noHashURL)
  }

  const hash = window.location.hash.replace(/#/, '')
  const updateHash = (newHash) => newHash ? window.location.hash = `#${newHash}` : removeLocationHash()
  return [hash, updateHash]
}

const TabContext = createContext()

const Tabs = ({
  children, className, defaultTab = 0, style, updateUrlHash,
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab)
  const [hash] = useLocationHash()

  useEffect(() => {
    if (updateUrlHash && hash) {
      setActiveTab(hash)
    }
  }, [])

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab, updateUrlHash }}>
      <div
        className={
          ['component-tabs', className].filter(el => el != null).join(' ')
        }
        style={{ ...style }}
      >
        {children}
      </div>
    </TabContext.Provider>
  )
}

const TabsList = ({ children, className, style }) => {
  const { activeTab, setActiveTab } = useContext(TabContext)
  const [hash] = useLocationHash()

  useEffect(() => {
    // activeTab is a string; find the matching tabIndex, else use tabIndex:0
    if (isNaN(activeTab)) {
      const tabIndex = Children.toArray(children).findIndex(child => child.props.tabName === activeTab)
      if (tabIndex !== -1) {
        return setActiveTab(activeTab)
      } else {
        setActiveTab(0)
      }
    }

    // activeTab is invalid; default to tabIndex:0
    if (!isNaN(activeTab) && activeTab > Children.toArray(children).length - 1) {
      setActiveTab(0)
    }
  }, [activeTab, hash])

  return (
    <ol
      className={
        ['component-tabslist', className].filter(el => el != null).join(' ')
      }
      style={{ ...style }}
    >
      {Children.toArray(children).map((child, i) => cloneElement(child, {
        tabIndex: i,
      }))}
    </ol>
  )
}

const Tab = ({
  children, className, label, style, tabIndex, tabName,
}) => {
  const { activeTab, setActiveTab, updateUrlHash } = useContext(TabContext)
  const [, updateHash] = useLocationHash()

  const handleClick = e => {
    if (updateUrlHash) {
      updateHash(tabName)
    }
    if (tabName) {
      setActiveTab(tabName)
    } else {
      setActiveTab(tabIndex)
    }
  }

  if ( children.length === 0 && !label) {
    return null
  }

  return (
    <li
      className={
        [
          'component-tab',
          (activeTab === tabName || activeTab === tabIndex ? 'active-tab' : undefined),
          className
        ].filter(el => el != null).join(' ')
      }
      onClick={handleClick}
      style={{ ...style }}
    >
      {label || children}
    </li>
  )
}

const TabsFrame = ({ children, className, style }) => {
  return (
    <div
      className={
        ['component-tabs-frame', className].filter(el => el != null).join(' ')
      }
      style={{ ...style }}
    >
      {Children.toArray(children).map((child, i) => cloneElement(child, {
        tabIndex: i,
      }))}
    </div>
  )
}

const TabView = ({
  children, className, forTab, forTabs, style, tabIndex,
}) => {
  const { activeTab, setActiveTab } = useContext(TabContext)

  if ((forTabs && forTabs.indexOf(activeTab) !== -1) || activeTab === forTab || activeTab === tabIndex) {
    return (
      <div
        className={
          ['component-tab-view', className].filter(el => el != null).join(' ')
        }
        style={{ ...style }}
      >
        {children}
      </div>
    )
  }

  return null
}

Tabs.propTypes = {
  className: PropTypes.string,
  defaultTab: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  style: PropTypes.object,
  updateUrlHash: PropTypes.bool,
}

TabsList.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
}

Tab.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  tabName: PropTypes.string,
  style: PropTypes.object,
}

TabsFrame.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
}

TabView.propTypes = {
  className: PropTypes.string,
  forTab: PropTypes.string,
  forTabs: PropTypes.array,
  style: PropTypes.object,
}

export { Tabs, TabsList, TabsFrame, Tab, TabView }
