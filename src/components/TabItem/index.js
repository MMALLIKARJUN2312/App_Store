// Write your code here

import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const activeTabButtonClassName = isActive ? 'active-tab-button' : 'tab-button'

  const onClickTabItem = () => {
    setActiveTabId(tabId)
  }

  return (
    <li className="tab-items-container">
      <button
        type="button"
        className={activeTabButtonClassName}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
