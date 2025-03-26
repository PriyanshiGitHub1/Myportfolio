import "./Projects.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IDCBank from './bank.jpg';
import GlitzandGlam from './gltizandglam1.jpg';
import Ecommerce from './ecommerce.jpg';
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
                <a className="project-link" href="https://github.com/PriyanshiGitHub1/You-tube-video-streaming-site" target="_blank"> SEE CODE </ a>
                <a className="project-link" href=" https://priyanshigithub1.github.io/You-tube-video-streaming-site/" target="_blank"> VIEW PAGE </ a>
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
                <a className="project-link" href="https://github.com/PriyanshiGitHub1/Trello-board" target="_blank"> SEE CODE </ a>
                <a className="project-link" href="https://priyanshigithub1.github.io/Trello-board/" target="_blank"> VIEW PAGE </ a>
              </CardActions>
            </Card>
          </div>

          <div>
            <Card sx={{ maxWidth: 345, backgroundColor: '#210585' }}>
              <CardMedia
                sx={{ height: 140 }}
                image= {Ecommerce}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
                  E-Commerce
                </Typography>
                <Typography variant="body2" sx={{ color: 'white' }}>
                  Developed an e-commerce website utilizing HTML, CSS and JavaScript
                  ensuring <span style={{ color: 'orangered', fontWeight: 'bold' }}> web responsiveness </span> across all devices
                  with a visually appealing design and seamless user experience.
                </Typography>
              </CardContent>
              <CardActions>
                <a className="project-link" href="https://github.com/PriyanshiGitHub1/E-commerce" target="_blank"> SEE CODE </ a>
                <a className="project-link" href="https://priyanshigithub1.github.io/E-commerce/" target="_blank"> VIEW PAGE </ a>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects