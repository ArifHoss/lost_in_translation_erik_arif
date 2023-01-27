import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"
const ProfileTranslationHistory = ({translations}) => {


    // this takes the translations array and maps over it, returning a ProfileTranslationHistoryItem component for each translation
    // it feeds in the translation object as a prop to the ProfileTranslationHistoryItem component
    // It also makes sure that a maximum of 10 translations are displayed and that the most recent translation is displayed first
    const translationList = translations.slice(-10).reverse().map(
        (translation, index) => <ProfileTranslationHistoryItem key={translation + '-' + index} translation={translation}/>)


    return (

       <section>
           <h4>Translation History</h4>

             {/*this displays the translationList array if it is not empty, if it is empty it displays a message*/}
           {translationList.length === 0 && <p>You have no translations yet</p>}
           <ul>

               {translationList}
           </ul>
       </section>
    )
}

export default ProfileTranslationHistory