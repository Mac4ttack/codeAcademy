let initialWagonState = {
    supplies:100,
    distance: 0,
    days: 0
  };
  
  const gameState = (state = initialWagonState, action) => {
    switch (action.type) {
      //A player may gather supplies, which takes them a day and doesn’t cover any distance.
      case 'gather':  {
        return {
          ...state,
          supplies: state.supplies + 15,
          distance: state.distance,
          days: state.days + 1
        }
      }
      //A player may travel for any number of days, which costs 20 supplies for each day but adds 10 kilometers each day.
      case 'travel': {
        if(state.supplies - (action.payload*20) < 0){
          console.log('not enough supplies to travel that long - 20 supplies per day')
          return state;
        } else {
          return{
          ...state,
          supplies: state.supplies - (action.payload*20),
          distance: state.distance + (action.payload*10),
          days: state.days + action.payload
        }
        }
        
      }
      //If a player drives off-road or across deep rivers, the wagon may tip! You’ll need to spend some supplies and a day to fix it.
      case 'tippedWagon': {
        return {
          ...state,
          supplies: state.supplies -30 ,
          distance: state.distance,
          days: state.days + 1
        }
      }
  
      default: {
        return state;
      }
    }
  }
  
  let wagon = gameState(undefined,{})
  wagon = gameState(wagon, {type:'travel', payload:1});
  console.log(wagon)
  wagon = gameState(wagon, {type:'gather'});
  console.log(wagon)
  wagon = gameState(wagon, {type:'tippedWagon'});
  console.log(wagon)
  wagon = gameState(wagon, {type:'travel', payload:3});
  console.log(wagon)
  
  
  
  
  