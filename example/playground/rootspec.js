;(function () {
  window['__rootZoneSpec__'] = {
    name: 'customRoot',
    onScheduleTask: function (parentZoneDelegate, currentZone, targetZone, task) {
      console.log('onScheduleTask', 'targetZone:', targetZone, task.source, ' type:', task.type)
      return parentZoneDelegate.scheduleTask(targetZone, task)
    },
    onInvokeTask: function (parentZoneDelegate, currentZone, targetZone, task, applyThis, applyArgs) {
      console.log('onInvokeTask', 'targetZone:', targetZone, task.source, ' type:', task.type)
      return parentZoneDelegate.invokeTask(targetZone, task, applyThis, applyArgs)
    },
    onCancelTask: function (parentZoneDelegate, currentZone, targetZone, task) {
      return parentZoneDelegate.cancelTask(targetZone, task)
    }
  }
})()
