import React from 'react';
import styles from './LandingPage.module.css';
import InfoCard from './InfoCard';

export default function InfoCardsLayout() {
  return (
    <>
      {/*                    LANDING / INTRO                   */}
      <InfoCard
        startKey={'intro1'}
        fadeInKey={'intro2'}
        fadeOutKey={'intro3'}
        endKey={'intro4'}
        left={10}
        width={20}
        top={75}
        header={''}
        paragraph={`“Nine dollars an hour. Nine dollars an hour,” New York City Mayor Eric Adams said proudly at a press conference reported on by The New York Times and other outlets.`}
      />
      <InfoCard
        startKey={'intro2'}
        fadeInKey={'intro3'}
        fadeOutKey={'intro4'}
        endKey={'intro5'}
        left={70}
        width={20}
        top={80}
        header={''}
        paragraph={`“I know you wanted to write how we’re wasting money,” he continued, addressing the gathered crowd of press and city officials, “but I’m sorry I’m taking your thunder away.”`}
      />

      <InfoCard
        startKey={'intro4'}
        fadeInKey={'intro6'}
        fadeOutKey={'height'}
        endKey={'height1'}
        left={0}
        width={100}
        top={90}
        header={''}
        paragraph={`“This is below minimum wage,” Adams added. “No bathroom breaks, no meal breaks.”`}
      />

      <InfoCard
        startKey={'intro4'}
        fadeInKey={'intro6'}
        fadeOutKey={'height'}
        endKey={'height1'}
        left={0}
        width={100}
        top={110}
        header={''}
        paragraph={`
        Adams was talking about the price for which the New York City Police Department signed a lease on its K5 robot, a 420-pound automated surveillance system. In September, Adams unveiled the city’s new K5, decked out in white and blue NYPD livery, at a press conference in Times Square-42nd St Station. The robot was set to patrol said station for a two-month trial.
        `}
      />

      {/*                   HEIGHT SCENE                  */}

      <InfoCard
        startKey={'height'}
        fadeInKey={'height2'}
        fadeOutKey={'height4'}
        endKey={'height5'}
        left={70}
        width={20}
        top={90}
        header={''}
        paragraph={`The K5 robot is equipped with four cameras that allow it to continually capture video of its surroundings. At about 5’2”, the sleek, limbless robot is hard to miss. Bright LEDs shine out from its front side and along gaps in panels along its sides–like if a NYPD cruiser had underlighting installed. `}
      />
      <InfoCard
        startKey={'height5'}
        fadeInKey={'specs'}
        fadeOutKey={'specs1'}
        endKey={'specs2'}
        left={0}
        width={100}
        top={120}
        header={''}
        paragraph={`At maximum speed, according to manufacturers Knightscope, K5 can move at 3mph. On a recent weekday in November, the K5 didn’t move an inch from its spot in Times Square-42nd St. station for at least an hour. All the while, at least one officer, usually two, were standing near the motionless robot.`}
      />
      {/*                    SPECS                   */}
      <InfoCard
        startKey={'specs2'}
        fadeInKey={'specs3'}
        fadeOutKey={'specs4'}
        endKey={'button'}
        left={10}
        width={20}
        top={110}
        header={''}
        paragraph={`Some math: at $9 hour, assuming the city paid for every hour of every day, then two months of continuous K5 service cost taxpayers a little over $13,000. `}
      />
      <InfoCard
        startKey={'specs2'}
        fadeInKey={'specs3'}
        fadeOutKey={'specs4'}
        endKey={'button'}
        left={70}
        width={20}
        top={110}
        header={''}
        paragraph={`At a starting salary of $58,580, a new NYPD officer can expect to make around $9,700 pre-tax over a two-month period of work.`}
      />
      <InfoCard
        startKey={'specs2'}
        fadeInKey={'specs3'}
        fadeOutKey={'specs4'}
        endKey={'button'}
        left={15}
        width={70}
        top={155}
        header={''}
        paragraph={`More senior officers and those working overtime can expect to make much more.`}
      />

      {/*                    SPECS:BUTTON/CAMERA                   */}
      <InfoCard
        startKey={'button1'}
        fadeInKey={'button1'}
        fadeOutKey={'button1'}
        endKey={'button3'}
        left={10}
        width={20}
        top={135}
        header={''}
        paragraph={`When the button is pressed, the robot will connect you to a live agent who is available 24/7 for questions, concerns, or incident reports.`}
      />
      <InfoCard
        startKey={'button'}
        fadeInKey={'button1'}
        fadeOutKey={'button2'}
        endKey={'button3'}
        left={70}
        width={20}
        top={140}
        header={''}
        paragraph={`“This call may be recorded for your safety.”`}
      />

      <InfoCard
        startKey={'button3'}
        fadeInKey={'button4'}
        fadeOutKey={'camera'}
        endKey={'camera1'}
        left={10}
        width={20}
        top={140}
        header={''}
        paragraph={`Video will be recorded, which can be viewed in case of emergencies or crimes. However, neither audio recording nor facial recognition are implemented.`}
      />

      <InfoCard
        startKey={'camera1'}
        fadeInKey={'camera2'}
        fadeOutKey={'camera4'}
        endKey={'specs5'}
        left={70}
        width={20}
        top={160}
        header={''}
        paragraph={`Police will then run images from the video recording through its facial recognition unit to identify potential crime suspects.`}
      />

      {/*                    SPECS CONT'D / HTML                   */}
      <InfoCard
        startKey={'specs5'}
        fadeInKey={'specs6'}
        fadeOutKey={'specs7'}
        endKey={'specs8'}
        left={0}
        width={100}
        top={155}
        header={''}
        paragraph={`It is likely that the NYPD spent at least twice as much to pay officers staying within sight of the stationary K5 than it did on leasing the robot itself.`}
      />
      <InfoCard
        startKey={'specs5'}
        fadeInKey={'specs6'}
        fadeOutKey={'specs7'}
        endKey={'specs8'}
        left={0}
        width={100}
        top={170}
        header={''}
        paragraph={`Of course, Adams’ boast about the low cost of leasing the robot wasn’t about this two-month trial. Instead, it was about the potential of eventually either replacing on-duty officers with robots like K5 or of expanding police presence in the city by adding K5s that aren’t always tailed by human officers.`}
      />
      <InfoCard
        startKey={'specs5'}
        fadeInKey={'specs6'}
        fadeOutKey={'specs7'}
        endKey={'specs8'}
        left={0}
        width={100}
        top={185}
        header={''}
        paragraph={`But how many K5 robots would need to be in the city to make them an effective, easily accessible way of reporting crimes and other incidents? To make them a first line of response worth the money paid for them?`}
      />
      <InfoCard
        startKey={'specs5'}
        fadeInKey={'specs6'}
        fadeOutKey={'specs7'}
        endKey={'specs8'}
        left={0}
        width={100}
        top={200}
        header={''}
        paragraph={`According to the official website of Times Square District Management Association, in 2019 the Times Square-42nd Street Subway station saw an average ridership of over 170,000 New Yorkers and visitors to the city passing through each day. The station officially serves as a stop for eight NYC Subway train lines–nine on weekends–-but it is also connected by winding passageways to the 42nd St. Port Authority station serving the A, C, and E lines.`}
      />

      {/*                    MAP                   */}
      <InfoCard
        startKey={'map'}
        fadeInKey={'map1'}
        fadeOutKey={'map2'}
        endKey={'map3'}
        left={10}
        width={20}
        top={165}
        header={''}
        paragraph={`Since its unveiling in September, the K5 bot leased by the NYPD has remained in one spot, at the entrance to the station at 42nd Street and 7th Avenue.`}
      />
      <InfoCard
        startKey={'map1'}
        fadeInKey={'map2'}
        fadeOutKey={'map3'}
        endKey={'map4'}
        left={70}
        width={20}
        top={180}
        header={''}
        paragraph={`What if something happened to a subway rider at the far end of the A train platform? Assume they know the K5 robot is at the 42nd and 7th entrance. `}
      />
      <InfoCard
        startKey={'map2'}
        fadeInKey={'map3'}
        fadeOutKey={'map4'}
        endKey={'map5'}
        left={10}
        width={20}
        top={200}
        header={''}
        paragraph={`One of the writers of this piece timed how long it took him, walking at a brisk pace without stopping, to get from the A train platform to the bot’s position.`}
      />
      <InfoCard
        startKey={'map3'}
        fadeInKey={'map4'}
        fadeOutKey={'map5'}
        endKey={'map6'}
        left={70}
        width={20}
        top={220}
        header={''}
        paragraph={`All told, it took over five and a half minutes.`}
      />
      <InfoCard
        startKey={'map6'}
        fadeInKey={'map7'}
        fadeOutKey={'map8'}
        endKey={'map9'}
        left={0}
        width={100}
        top={195}
        header={''}
        paragraph={`Though the spectacle of its unveiling might’ve suggested otherwise, the NYPD putting a single K5 into service was realistically never going to result in much more than a robot standing in place. The K5 cannot go up and down stairs, and Times Square-42nd Street is a sprawling multi-level station. Though both connected 42nd St stations are on the MTA’s list of ADA-accessible stations, routes through both that avoid stairs are winding. A K5, if left to navigate the entire station, would be a particularly slow monitoring tool.`}
      />
      <InfoCard
        startKey={'map6'}
        fadeInKey={'map7'}
        fadeOutKey={'map8'}
        endKey={'map9'}
        left={0}
        width={100}
        top={215}
        header={''}
        paragraph={`Anyone with more than a passing familiarity with the K5 before Adams’ announcement would already know this, and plenty of people are. First unveiled in 2014, Knightscope’s K5 robots have been deployed in numerous locales for years now. Criticism of the machines–and outright failures–are well-documented.`}
      />
      <InfoCard
        startKey={'map6'}
        fadeInKey={'map7'}
        fadeOutKey={'map8'}
        endKey={'map9'}
        left={0}
        width={100}
        top={230}
        header={''}
        paragraph={`K5s started making headlines soon after they were released. Perhaps predictably, the robots were not welcomed or even just tolerated in every place they were deployed.`}
      />

      {/*                    IMAGES                   */}
      <InfoCard
        startKey={'img'}
        fadeInKey={'img1'}
        fadeOutKey={'img2'}
        endKey={'img3'}
        left={10}
        width={20}
        top={210}
        header={''}
        paragraph={`In 2017, The Verge reported on the swift public backlash to a San Francisco animal hospital’s decision to use a K5 to intimidate homeless people. `}
      />
      <InfoCard
        startKey={'img1'}
        fadeInKey={'img2'}
        fadeOutKey={'img3'}
        endKey={'img4'}
        left={70}
        width={20}
        top={210}
        header={''}
        paragraph={`Accidents involving K5s also made the news: in the summer of 2016, Palo Alto’s ABC affiliate reported on a child getting knocked over and injured by a K5 deployed in a shopping mall. `}
      />
      <InfoCard
        startKey={'img3'}
        fadeInKey={'img4'}
        fadeOutKey={'img5'}
        endKey={'img6'}
        left={10}
        width={20}
        top={240}
        header={''}
        paragraph={`A year later, a K5 deployed in DC went viral when a Twitter used photographed it having fallen into a fountain.`}
      />

      <InfoCard
        startKey={'img6'}
        fadeInKey={'img7'}
        fadeOutKey={'img8'}
        endKey={'img9'}
        left={0}
        width={100}
        top={235}
        header={''}
        paragraph={`At the time, numerous internet commenters and bloggers joked that the robot had tried to take its own life. Regardless, decision makers like Mayor Adams keep the K5 living on as a surveillance product.`}
      />
      <InfoCard
        startKey={'img6'}
        fadeInKey={'img7'}
        fadeOutKey={'img8'}
        endKey={'img9'}
        left={0}
        width={100}
        top={245}
        header={''}
        paragraph={`For all its cameras and the talk of its usefulness to law enforcement, however, the K5 deployed in New York’s subway system mainly seemed to be there for one purpose: people taking photos with the robot they heard about on the news.`}
      />
    </>
  );
}
