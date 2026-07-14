import { Timer, Lifecycle, TimerWithCleanup, SyncedInputs } from "../components/UseEffectExample"
function ExampleForm() {
  return (
    <>
      <Timer />
      <Lifecycle />
      <TimerWithCleanup />
      <SyncedInputs />
    </>
  )
}

export default ExampleForm