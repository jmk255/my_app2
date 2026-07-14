import { Timer, Lifecycle, TimerWithCleanup, SyncedInputs } from "../components/UseEffectExample"
function ExampleForm() {
  return (
    <>
      <Lifecycle />
      <TimerWithCleanup />
      <SyncedInputs />
    </>
  )
}

export default ExampleForm