import React from 'react'
//import * as Cookie from 'react-cookie'

// Images
import Close from "../../Images/Icons/close.png"
import G63 from "../../Images/News/G63.jpg"
import URUS from "../../Images/News/Urus.jpg"
import RACE from "../../Images/News/Race.jpg"

// Style
import "./newsStyle.scss"
import "../../siteContent.scss"

const CreateReadMoreElement = ({
    containerClass = "",
    elementTitle = "",
    elementImage = "",
    elementImageAlt = "",
    elementContentText = ""
}) => {
    //const [cookies, setCookie, removeCookie] = Cookie.useCookies(['example-cookie']);

    return (
        <div className={`read-more-element-container ${containerClass}`}>
            <img className="read-more-element-close-button" src={Close} alt="Close Button" onClick={() => {
                document.querySelector(`.${containerClass}`).classList.toggle("active");
                document.querySelector("body").classList.toggle("disable-scroll");
                document.querySelector(`.${containerClass}`).classList.toggle("scroll-y");
            }}/> 
            <div className="read-more-element-content">
                <div className="read-more-element-header">
                    <p>{elementTitle}</p>
                </div>
                <div className="read-more-element-image">
                    <img src={elementImage} alt={elementImageAlt} title={elementImageAlt}/>
                </div>
                <div className="read-more-element-content-text">
                   {elementContentText}
                </div>
            </div>
        </div>
    )
}

const CreateNewsElement = ({
    containerClass = "",
    newsTitle = "",
    newsImage = "",
    newsImageAlt = "",
    contentText = ""
}) => {
    return (
        <div className="news-card-container">
            <CreateReadMoreElement containerClass={containerClass} elementTitle={newsTitle} elementImage={newsImage} elementImageAlt={newsImageAlt} elementContentText={contentText}/>
            <div className="news-card-header">
                <p>{newsTitle}</p>
            </div>
            <div className="news-card-image">
                <img src={newsImage} alt={newsImageAlt} title={newsImageAlt} onClick={() => {
                    document.querySelector(`.${containerClass}`).classList.toggle("active");
                    document.querySelector("body").classList.toggle("disable-scroll");
                    document.querySelector(`.${containerClass}`).classList.toggle("scroll-y");    
                }}/>
                <button className="news-card-image-button" onClick={() => {
                    document.querySelector(`.${containerClass}`).classList.toggle("active");
                    document.querySelector("body").classList.toggle("disable-scroll");
                    document.querySelector(`.${containerClass}`).classList.toggle("scroll-y");
               }}>Read More</button>
            </div>
        </div>
    )
}

const News = () => {
    return (
        <div>
            <div className="site-content-header">News</div>
            <div className="site-content-container">
                <div className="site-content-container-content">
                    <CreateNewsElement newsTitle="New AMG G63 in Our Garage!" containerClass="amgg63" newsImage={G63} newsImageAlt="https://www.motor1.com/news/302797/mercedes-amg-g63-720-hp/" contentText={`
                        Deserunt incididunt veniam non laboris Lorem ex. Pariatur Lorem commodo dolor Lorem ea culpa. Deserunt exercitation quis deserunt aliquip fugiat excepteur labore enim non labore enim. Eiusmod est exercitation exercitation excepteur magna nisi. Enim nostrud nostrud nostrud id consectetur occaecat qui dolor dolor nulla consequat. Ipsum magna dolore minim aliqua nulla et consectetur laborum ex occaecat aute aliquip mollit occaecat. Veniam ea adipisicing cillum culpa.
                        Tempor anim non id sint duis ut laborum exercitation incididunt nulla amet elit aliqua. Est duis cupidatat nostrud tempor consectetur irure cillum. Ipsum irure laboris magna cillum reprehenderit sunt voluptate eiusmod voluptate velit cupidatat duis adipisicing reprehenderit. Duis nulla in fugiat velit consequat cillum nostrud incididunt laborum. Lorem do adipisicing laborum veniam consequat irure deserunt mollit veniam. Lorem incididunt minim quis est esse exercitation adipisicing aute est voluptate eu eiusmod.
                        Cupidatat quis Lorem pariatur pariatur. Adipisicing labore exercitation sint ea mollit ea non et aliquip sint laborum. Veniam aliquip magna mollit magna id. Tempor ullamco consequat amet nisi nostrud proident labore cupidatat sunt. Laboris eiusmod magna irure voluptate ea. Tempor pariatur sunt mollit ea cillum eu ex pariatur commodo commodo.             
                        Occaecat commodo ex esse esse excepteur fugiat. Eu labore dolore incididunt sit est ut officia nisi esse. Et velit veniam sit quis aute. Occaecat tempor anim ipsum incididunt ut irure magna duis ad. Eiusmod anim do Lorem fugiat quis id velit ipsum qui.
                    `}/>
                    <CreateNewsElement newsTitle="We bought new 2019 Lamborghini Urus!" containerClass="lurus" newsImage={URUS} newsImageAlt="https://cdn.motor1.com/images/mgl/Y4k1W/s3/2019-lamborghini-urus.jpg"  contentText={`
                        Occaecat nostrud sit irure labore ad anim. Non et aliqua deserunt officia. Officia in et Lorem anim irure consectetur consectetur qui culpa tempor tempor. Sunt exercitation do eu cupidatat eiusmod ad. Laboris do ex incididunt nostrud anim reprehenderit qui. Consectetur consectetur commodo eiusmod aliqua proident sunt irure. Cupidatat voluptate velit nostrud non commodo est mollit.
                        Proident voluptate labore reprehenderit dolore non. Nostrud Lorem dolore sunt officia elit officia aliquip proident Lorem sint voluptate adipisicing. Id non esse reprehenderit sint id laboris pariatur sit amet tempor proident magna voluptate. Quis exercitation ipsum sunt laboris mollit fugiat aute nulla exercitation est esse ipsum proident. Tempor cillum magna irure nulla consequat est et. Laboris sint velit mollit fugiat.
                        Lorem qui tempor ut id aliqua culpa proident. Aliquip nulla officia aliquip ipsum officia minim dolor ut ullamco duis. Duis proident culpa ut sint. Occaecat irure dolore excepteur commodo labore occaecat ipsum nulla minim commodo. Id laborum adipisicing in consequat elit. Ea adipisicing exercitation labore pariatur ut mollit deserunt ipsum ad sunt commodo ad.
                        Veniam nulla nisi non magna. Anim labore nisi magna officia non nulla enim reprehenderit aliquip. Mollit ex sunt reprehenderit nisi nulla. Culpa velit duis ex laborum proident sint qui mollit veniam Lorem. Commodo eiusmod eiusmod sunt fugiat.
                        Tempor dolore do ex nostrud aliqua ipsum consequat excepteur dolore magna in ad. Commodo cillum deserunt cupidatat fugiat enim. Velit consequat cupidatat enim ut laboris. Consequat in est commodo dolor labore esse et anim nulla in anim sit veniam nulla.
                        Officia consectetur tempor est proident nulla nisi est. Id esse adipisicing non irure voluptate. Lorem veniam eiusmod sunt id est ea excepteur officia proident fugiat ut sit. Quis in labore aute Lorem est enim qui incididunt magna sit cupidatat reprehenderit. Mollit aliqua nisi cupidatat dolor. Est excepteur deserunt do minim culpa in ut pariatur amet culpa.
                        Quis officia aliqua non irure adipisicing eiusmod qui nisi commodo adipisicing labore dolor adipisicing officia. Cillum mollit laboris aute eu. Deserunt cillum aliquip est dolor deserunt eu elit laborum tempor. Pariatur in cupidatat id mollit fugiat laborum culpa ipsum do dolor eu. Aliquip labore eiusmod sint ipsum. Occaecat adipisicing esse quis elit velit aute elit quis labore et ea ex culpa. Magna non duis tempor cillum.
                        Id fugiat adipisicing sint aute aute id in irure ut quis magna. Quis nulla eu quis magna irure sint aute. Nisi elit veniam nostrud commodo. Consectetur non et aute do elit labore. Anim magna nostrud commodo elit qui aute duis ut.
                    `}/>
                    <CreateNewsElement newsTitle="Our Cars in New Redbull Race!" containerClass="redbullrace" newsImage={RACE} newsImageAlt="https://images.daznservices.com/di/library/sporting_news/c0/c6/texas-restart2020-071920-getty-ftrjpg_1cfd8yxn3j1b71522398mx4lgv.jpg?t=1771639011&quality=100&w=1280&h=720" contentText={`
                        Sint anim sit mollit nostrud. Dolor deserunt pariatur ut adipisicing qui reprehenderit Lorem exercitation. Exercitation et mollit ex occaecat adipisicing ut aute Lorem aliquip sit. Occaecat nisi officia do labore ipsum dolore veniam quis eiusmod aliqua fugiat eu eiusmod. Ullamco amet Lorem sunt reprehenderit labore aliqua laboris enim. Consectetur eiusmod eu anim aliqua elit ipsum labore ea officia dolor dolore voluptate in adipisicing. In do labore ullamco tempor Lorem laboris nulla culpa.
                        Consectetur velit tempor officia sunt Lorem officia anim est in qui minim velit. Velit aliquip officia ut proident magna excepteur laboris sint. Fugiat sint qui pariatur irure dolore enim.
                        Quis commodo do non minim. Deserunt ad enim excepteur quis ut ex exercitation exercitation duis labore est. Non qui aliqua sint id ex culpa est dolor duis elit adipisicing. Elit cillum veniam non consectetur laborum velit eiusmod sunt excepteur sit consectetur. Id dolore proident magna consequat officia. Sunt nostrud sunt amet incididunt incididunt proident aute. Dolor tempor id eu dolor excepteur.
                        Tempor ex ea ad dolore incididunt velit ipsum cupidatat est. Officia pariatur commodo commodo mollit veniam laboris nostrud incididunt sit aliqua ullamco anim sunt veniam. Sit voluptate ullamco est et. Adipisicing eu deserunt do velit duis fugiat sunt elit labore aliqua et magna cupidatat minim. Reprehenderit do ipsum dolor fugiat velit duis sint magna id ex culpa mollit laboris. Ullamco enim proident sit duis ad sit aute ipsum reprehenderit laborum. Ex duis occaecat id pariatur.
                        Ad do labore qui occaecat elit reprehenderit veniam laboris in aliqua deserunt quis. Id esse dolore ipsum aliquip minim irure. Proident aute magna in veniam sit commodo est anim.
                        Nostrud tempor sit incididunt ea consequat consequat reprehenderit proident ad. Occaecat laboris dolor minim excepteur aute irure et cillum laborum voluptate duis. Ex aute ut fugiat amet aliqua ex. Exercitation labore culpa consequat incididunt nostrud pariatur. Commodo in in consequat nostrud culpa non aliqua occaecat dolor nostrud. Ut enim laboris commodo aute culpa dolore dolor est commodo adipisicing veniam. Enim sint exercitation reprehenderit proident magna do.
                    `}/>
                </div>
            </div>
        </div>
    )
}

export default News;