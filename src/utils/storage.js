import { saveCheckedEp, saveSearchInterval, saveCheckedAuto } from '../tool/data'
function saveState (state) {
  saveCheckedEp(state.setting.checkedEp)
  saveSearchInterval(state.setting.intervalValue)
  saveCheckedAuto(state.setting.checkedAuto)
}

export default function () {
  return next => (reducer, initialState) => {
    const store = next(reducer, initialState)
    store.subscribe(() => {
      const state = store.getState()
      saveState(state)
    })
    return store
  }
}
