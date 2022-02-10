import {Howl} from 'howler';

export default function Key(props) {
  const {soundObj} = props;

  const soundHowl = new Howl({
    src: [soundObj.sound]
  });


    return (
      <>
        <button onClick={()=> {
          console.log("soundObj")
          soundHowl.play()
        }} >
          {soundObj.label}
        </button>
      </>
      
      
    );
  }