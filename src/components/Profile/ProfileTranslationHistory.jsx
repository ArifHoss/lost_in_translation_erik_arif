import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"
const ProfileTranslationHistory = ({translations}) => {


    const translationList = translations.map(
        (translation, index) => <ProfileTranslationHistoryItem key={translation + '-' + index} translation={translation}/>)
    return (

       <section>
           <h4>Translation History</h4>


           {translationList.length === 0 && <p>You have no translations yet</p>}
           <ul>

               {translationList}
           </ul>
       </section>
    )
}

export default ProfileTranslationHistory