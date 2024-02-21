
//Hide-------------
function hideUsingId(idHide)
{
    const HideElement =document.getElementById(idHide);
    HideElement.classList.add('hidden');
}

//Show----------
function ShowUsingId(idShow)
{
    const HideElement =document.getElementById(idShow);
    HideElement.classList.remove('hidden');
}



//---------------------Creating Random Alphabets-----------------------//

function randomAlphabets(){
    const AlphabetsString = 'abcdefghijklmnopqrstuvwxyz';
   const Alphabets =  AlphabetsString.split('');
   console.log(Alphabets);

   const RandomNum = Math.random()*25;
   const index = Math.round(RandomNum);

   const Alphabet = Alphabets[index]; //showing Alphabets
   console.log(index,Alphabet);
   return  Alphabet;


}



//---Set Bg-Color on Random Alphabets--------
function setBgColorAlphabets(element)
{
    const getTheAlphabets=document.getElementById(element);
    getTheAlphabets.classList.add('bg-orange-400') ;
}


//---Remove Bg-Color on Random Alphabets--------
function RemoveBgColorAlphabets(element)
{
    const getTheAlphabets=document.getElementById(element);
    getTheAlphabets.classList.remove('bg-orange-400') ;
}





//showing Random Alphabets on Screen While Click-----------------------

function  ContinueGame_CallingRandomAlphabets()
{
    const Alphabet = randomAlphabets();
    console. log( 'your random alphabet',Alphabet);

    //Alphabets Set on screen 

    const ShowAlphabetsOnScreen = document.getElementById('CurrentAlphabetOnScreen');
    ShowAlphabetsOnScreen.innerText = Alphabet;
    

    //-----set Bg-color of Alphabets------
    setBgColorAlphabets(Alphabet);
}






//----------Detect keyboard press----------

function keyPressDetect(event){
    // console.log('Dud U press Me!');

    //user press
    const  KeyPressed = event.key;
    console.log('You Press', KeyPressed);

    if(KeyPressed === "Escape")
    {
        GameOver();
    }


    //Current Alphabets button On Screen
    const ShowAlphabetsOnScreen = document.getElementById('CurrentAlphabetOnScreen');
    const CurrentAlphabets = ShowAlphabetsOnScreen.innerText;
    console.log("Current Alphabets",CurrentAlphabets)

    if(KeyPressed === CurrentAlphabets ){
        console.log( "Correct Answer"); 

        // const currentPoint = document.getElementById('ScorePoint');
        // const CurrentScoreText = currentPoint.innerText;
        // const CurrentScore= parseInt(CurrentScoreText);

        const CurrentScore = GetScoreFromScoreSection('ScorePoint');
        const NewScore = CurrentScore+1;
        SetScoreFromScoreSection('ScorePoint',NewScore);

        // ScorePoint.innerText = NewScore;

        
        //correct press Korar por oi bg remove korar jonno below code

        const getTheAlphabets=document.getElementById(CurrentAlphabets);
        getTheAlphabets.classList.remove('bg-orange-400') ;
         ContinueGame_CallingRandomAlphabets();
    }

    else
    
    {
        console.log('Error Press');
        // const currentLife = document.getElementById('LifePoint');
        // const CurrentLifeText = currentLife.innerText;
        // const CurrentLife= parseInt(CurrentLifeText);

        const CurrentLife = GetScoreFromScoreSection('LifePoint');
        const NewLife = CurrentLife - 1;
        SetScoreFromScoreSection('LifePoint',NewLife);
        // LifePoint.innerText = NewLife;

        if(NewLife === 0)
        {
            GameOver();

        }
        
    }

}

document.addEventListener("keyup",keyPressDetect); //calling the PeyPressDetect function




//Point/Life Section Using Function---------------------

function GetScoreFromScoreSection(element)  //if part
{
        const elementPoint = document.getElementById(element);
        const elementScoreText = elementPoint.innerText;
        const elementScore= parseInt(elementScoreText);
        return  elementScore;
        
}

function SetScoreFromScoreSection(elementid,value){
    const element = document.getElementById(elementid);
    element.innerText = value;

}

//foe remove current alphabet color -> check on play function 
function GetElementById(ElementId){

    const element  = document.getElementById (ElementId);
    const text = element.innerText;
    return text;
 
}



//play function will pass the arguments to the function to work properly
function play()
{
    // hide Everyhing show only play ground
    hideUsingId('HideOnClick');
    hideUsingId('Final-Score');
    ShowUsingId('showOnClick');

    //After click on play again assign the new value in the secore

    SetScoreFromScoreSection('LifePoint',5);
    SetScoreFromScoreSection('ScorePoint',0);

    //reset 
    ContinueGame_CallingRandomAlphabets();
  

}



//GameOver when Life = 0

function GameOver(){
    hideUsingId('showOnClick');
    ShowUsingId('Final-Score');

    //update Final core
    const LastScore = GetScoreFromScoreSection('ScorePoint');
    SetScoreFromScoreSection('GameFinalScore',LastScore);

    //cleare the last selected alphabets
    const currentAlphabet = GetElementById('CurrentAlphabetOnScreen');
    RemoveBgColorAlphabets(currentAlphabet);

}


