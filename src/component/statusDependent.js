import { useStatus } from "./isOnline";
function Status() {
  const status = useStatus();
  function handleSaveClick() {
    console.log("✅ Progress saved");
  }
  return (
    <>
      <h1>
        {status ? "You are currently online" : "Your are currently offline"}
      </h1>
      <button disabled={!status} onClick={handleSaveClick}>
        {status ? "Save progress" : "Reconnecting...."}
      </button>
    </>
  );
}
export default Status;
