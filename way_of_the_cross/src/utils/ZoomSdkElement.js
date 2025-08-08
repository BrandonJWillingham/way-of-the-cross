import ZoomMtgEmbedded from "@zoom/meetingsdk/embedded";

export default function ZoomSDK(){
  const client = ZoomMtgEmbedded.createClient();

  const getSignature = async () => {
      try {
        // const req = await fetch(process.env.AUTH_END_POINT, {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify({
        //     meetingNumber: process.env.MEETING_NUMBER,
        //     role: 0,
        //     videoWebRtcMode: 1,
        //   }),
        // });
        const res = await fetch("https://way-of-the-cross-api.onrender.com/generate-signature", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            meetingNumber: "7507046901",
            role: 0,
            videoWebRtcMode: 1,
          }),
        });
        const { signature, meetingNumber, password,appKey } = await req.json();
        startMeeting(signature, meetingNumber, password,appKey);
      } catch (e) {
        console.log(e);
      }
  };
  
  async function startMeeting(signature,meetingNumber,password,appKey) {

    const meetingSDKElement = document.getElementById("ZoomSDKElement");

    try {
      await client.init({
        zoomAppRoot: meetingSDKElement,
        language: "en-US",
        patchJsMedia: true,
        leaveOnPageUnload: true,
        customize: {
          video: {
            isResizable: true,
            viewSizes: {
              default: {
                width: window.innerWidth *7/12,
                height: window.innerHeight *7/12,
              },
            },
          },
        },
      });
      await client.join({
        signature: signature,
        meetingNumber: meetingNumber,
        sdkKey: appKey,
        password: password,
        userName: 'Web-User',
        viewMode: "speaker",
      });
      console.log("joined successfully");
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <>
        <div id="ZoomSDKElement"   style={{
          width: "100%",
          maxWidth: `${window.innerWidth *7/12}`,
          height: `${window.innerHeight *7/12}`,
          margin: "0 auto",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}>
         <button onClick={getSignature}> Join Zoom</button>
        </div>  
    </>
  )
}