import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"
const ProfileTranslationHistory = ({translations}) => {


    const translationList = translations.map(
        (translation, index) => <ProfileTranslationHistoryItem key={translation + '-' + index} translation={translation}/>)
    return (

       <section>
           <h4>Translation History</h4>
           <ul>{translationList}</ul>
       </section>
    )
}

export default ProfileTranslationHistory