import Key from "./Key.js";


export default function Keys(props) {
  
  const { drumSounds } = props;

    return (
      <ul>
        {
          drumSounds.map((soundObj, index) => <Key key={soundObj.id} soundObj={soundObj} />)
        }
      </ul>
    );
  }