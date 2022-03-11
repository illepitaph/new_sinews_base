import Head from 'next/head'
import Header from '../../components/header.js'
import RightGrayTitle from '../../components/rightGrayTitle.js'
import LeftBlackTitle from '../../components/leftBlackTitle.js'
import StandardLineation from '../../components/standardLineation.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/PoemsBorn.module.css'
PoemsBorn.title = "vi_khi_nao ~ poems_born_from_basic_words — new_sinews"
PoemsBorn.pieceName = "vi_khi_nao ~ poems_born_from_basic_words — new_sinews"
PoemsBorn.description = "_Vi Khi Nao_poetry_POEMS BORN FROM BASIC WORDS_new_sinews_issue4_"
PoemsBorn.image = "https://static1.squarespace.com/static/56ffc729d210b8e9fdfebb18/t/622ad9952ccc9423ff63c02c/1646975381965/p-2.jpg"

export default function PoemsBorn() {
  return (
      <>
          <Head/>

       <Header headerBackground="poemsBornBackground"/>

       <br/>
       <br/>
       <br/>
       <br/>

       <RightGrayTitle><span
       className={styles.inverseShadow}>poem</span>s<br/><br/><i><span
       className={styles.inverseShadow}>bor</span>n </i><span
       className={styles.titleShadow}>fro</span>m<br/><span
       className={styles.inverseShadow}>basi</span>c<br/><br/><span className={styles.titleShadow}> w<br/> <span
       className={styles.inverseShadow}>o<br/> </span></span><span className={styles.titleShadow}>r <br/></span><span
       className={styles.inverseShadow}>d<br/></span>s</RightGrayTitle>

       <br/>

        <br/><br/>

        <LeftBlackTitle>... ... vi khi nao ... ...</LeftBlackTitle>

        <br/>

        <RightGrayTitle><span className={styles.titleShadow}>(</span> a time<span
          className={styles.titleShadow}>line</span> of<br/>desire<br/>leads to
          a time-<br/><span className={styles.titleShadow}>line</span> of dead<br/>ends<span
          className={styles.titleShadow}> )</span></RightGrayTitle>

        <br/>
        <br/>

<h3 className={styles.sectionHeading}>A</h3>
<br/>
<StandardLineation content={`An angry air        above another
Afraid   to ask for an attack    along
An army  of autumn
Another  answer
Another  aunt
Another activity  age alone
All alone
An attack
All alone

i appear
All alone
An art  all air
An apple as art`}/>
<br/><br/><br/><br/>
<h3 className={styles.sectionHeading}>B</h3>
<br/>
<StandardLineation content={`Brave baby      bleeds
Between       beer   &  busy
Between        brother    & better
Baby  bleeds  for  bottle
Baby bleeds  for  blue  bell
Baby bleeds & bleeds.
Near   a bag  ball
Black boys brave  bright bed
Big birthday`}/>
<br/><br/><br/><br/>
<h3 className={styles.sectionHeading}>O</h3>
<br/>
<StandardLineation content={`Obey ocean
Obey now
Old oil of you  over  this obey
Of object
Like an opposite other
Like an orange
Like an order
Outside my own oil
An ocean opens its opposite object
An ocean open outside her own
Outside an offer
An ocean offers her oil often
An ocean of order, of others, outside my own
Obey me  my opposite
My oil
My offer
My old opposite
Only open for me, object
Open only for me, object`}/>
<br/><br/><br/><br/>
<h3 className={styles.sectionHeading}>Q</h3>
<br/>
<StandardLineation content={`Quiet queen
Quiet
Quiet
Be quick in being quiet
Quick question for quick queen
Quite the question
Quite the queen
Quite the quickness`}/>
<br/><br/><br/><br/>
<h3 className={styles.sectionHeading}>J</h3>
<br/>
<StandardLineation content={`Jump juice
Jump
Just jump
For jelly juice
Join us juice
Join us in jelly jump
Juice
Juice`}/>
<br/><br/><br/><br/>
<h3 className={styles.sectionHeading}>N</h3>
<br/>
<StandardLineation content={`Noble noise
Name  male  a  nice neck   not  too narrow
A north narrow night
O noble noise
Never notices the night  in the name of north
Never notices the next noble noise
Never notice the needle near neither nature nor neck
O noble noise
Nature  so near north
Of not  not nothing
Never narrow my night with your noble noise
Now notice, noble noise, of my neck`}/>
<br/><br/><br/><br/>
<h3 className={styles.sectionHeading}>M</h3>
<br/>
<StandardLineation content={`Most mothers may marry  mistakes with medicine
Most mornings I must  market music with  main machine
With modern moon for modern moment
Mix my mistake with medicine
Mix my mouth with  method music
Mix my morning with modern moment
Medicine, meet a member of the moon
Marry her with mountain, mouth, & music
Marry matter with meal and morning
Must I move this middle mountain
Like a machine?
Must I marry the market with money or male?
Must I mother?`}/>
<br/><br/><br/><br/>
<h3 className={styles.sectionHeading}>I</h3>
<br/>
<StandardLineation content={`Increase ice on an island
It’s important to be inside of iron
It’s an island.
An idea for an island to be inside
It’s an increase of iron to be important
To an island
Inventing ice for an island is not important`}/>

                     <Footer/>

                       </>
                   )
                 }
