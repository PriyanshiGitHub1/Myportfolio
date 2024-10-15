import "./Projects.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IDCBank from './bank.jpg';
import GlitzandGlam from './gltizandglam1.jpg';
import HackerNews from './hackernews.jpg';
import TrelloBoard from './trelloboard.jpg';
import YouTube from './youtube.jpg';
import Wallpaper3 from './wallpaper7.jpg';

const Projects = () => {
  return (
    <>
      <div className="projects-img-container"><img src= {Wallpaper3} alt="Wallpaper" /> </div>
      <div className="projects-container">
        <div className='row1'>
          <div>
            <Card sx={{ maxWidth: 345, backgroundColor: 'rgb(87, 3, 87)' }}>
              <CardMedia
                sx={{ height: 140 }}
                image= {YouTube}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
                  You Tube Clone
                </Typography>
                <Typography variant="body2" sx={{ color: 'white' }}>
                  YouTube project
                  leveraging the <span style={{ color: 'orangered', fontWeight: 'bold' }}> YouTube API </span>, meticulously integrating its robust
                  features and functionalities to create a seamless video
                  streaming experience complete with searching and playback
                  capabilities
                </Typography>
              </CardContent>
              <CardActions>
                <a href="https://github.com/PriyanshiGitHub1/You-tube-video-streaming-site" target="_blank"> SEE CODE </ a>
                <a href=" https://priyanshigithub1.github.io/You-tube-video-streaming-site/" target="_blank"> VIEW PAGE </ a>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 345, backgroundColor: 'maroon' }}>
              <CardMedia
                sx={{ height: 140 }}
                image= {TrelloBoard}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
                  Trello Board
                </Typography>
                <Typography variant="body2" sx={{ color: 'white' }}>
                  Developed a Trello board to track task progress featuring
                  Backlogs, In process and Done sections with <span style={{ color: 'orangered', fontWeight: 'bold' }}> update and delete facilities </span>
                  which enhances productivity, visibility and colloration among team members
                </Typography>
              </CardContent>
              <CardActions>
                <a href="https://github.com/PriyanshiGitHub1/Trello-board" target="_blank"> SEE CODE </ a>
                <a href="https://priyanshigithub1.github.io/Trello-board/" target="_blank"> VIEW PAGE </ a>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 345, backgroundColor: '#210585' }}>
              <CardMedia
                sx={{ height: 140 }}
                image= {HackerNews}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
                  Hacker News
                </Typography>
                <Typography variant="body2" sx={{ color: 'white' }}>
                  Developed a job posting portal that leverages
                  the robust <span style={{ color: 'orangered', fontWeight: 'bold' }}> Hacker News API </span>to showcase an
                  array of job listings, providing a comprehensive and user-friendly
                  platform for job seekers to apply for exciting
                  opportunities in the tech industry
                </Typography>
              </CardContent>
              <CardActions>
                <a href="https://github.com/PriyanshiGitHub1/Job-posting-portal" target="_blank"> SEE CODE </ a>
                <a href=" https://priyanshigithub1.github.io/Job-posting-portal/" target="_blank"> VIEW PAGE </ a>
              </CardActions>
            </Card>
          </div>
    
        </div>
        <div className='row2'>
          <div>
            <Card sx={{ maxWidth: 345, backgroundColor: '#022e11' }}>
              <CardMedia
                sx={{ height: 140 }}
                image= {IDCBank}              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
                  IDC Bank
                </Typography>
                <Typography variant="body2" sx={{ color: 'white' }}>
                  Leveraged the robust and widely-used <span style={{ color: 'orangered', fontWeight: 'bold' }}> Material-UI (MUI) </span>
                  library, incorporating its extensive array of pre-built,
                  customizable, and accessible components, such as buttons,
                  cards, tables, and navigation menus
                </Typography>
              </CardContent>
              <CardActions>
                <a href="https://github.com/PriyanshiGitHub1/IDC-Bank" target="_blank"> SEE CODE </ a>
                <a href=" https://priyanshigithub1.github.io/IDC-Bank/" target="_blank"> VIEW PAGE </ a>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 345, backgroundColor: '#ce1186' }}>
              <CardMedia
                sx={{ height: 140 }}
                image= {GlitzandGlam}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
                  Glitz and Glam
                </Typography>
                <Typography variant="body2" sx={{ color: 'white' }}>
                  Created an e-commerce website that boasts a user-friendly
                  interface, seamless navigation, and robust online shopping
                  capabilities that effortlessly
                  showcases products, processes transactions, and fosters
                  business growth
                </Typography>
              </CardContent>
              <CardActions>
                <a href="https://github.com/PriyanshiGitHub1/Glitz-and-glam-e-commerce" target="_blank"> SEE CODE </ a>
                <a href="https://priyanshigithub1.github.io/Glitz-and-glam-e-commerce/" target="_blank"> VIEW PAGE </ a>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects