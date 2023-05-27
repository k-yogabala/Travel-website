import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Navigation } from '@mui/icons-material';

const pages = ['Home','Registration','About','Contact','Booking','Payment'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navigation1() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Login
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography
                        text-align='center'
                        variant="h10"
                        noWrap
                        component="a"
                        href={page.toLowerCase().substring(0,3)}
                        sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        fontFamily: 'monospace',
                        fontWeight: 400,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        {page}
                    </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Typography
                    variant="h10"
                    noWrap
                    component="a"
                    href={page.toLowerCase().substring(0,3)}
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 400,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    {page}
                </Typography>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGBgaGhgcGhgcHRweGhgaGhgaGhgaGhgcIy4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQrJSs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EADoQAAEDAQUGAgoCAQQDAQAAAAEAAhEDBBIhMVEFQWFxgZGh8AYTFCIyUrHB0eFCYvEVI3KSQ4LSsv/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EAC8RAAMAAgECBAUDAwUAAAAAAAABAgMRIRIxBBNBURQiMmFxgZGhQsHwBSNSsdH/2gAMAwEAAhEDEQA/AMAWZX9hJWoaYTFnszSMT0/a5nl0egsaMVmz3aJpmynaL0FCzN+ZaFJrBvlTrNRRY5R56jsMpn/TC3ct/wBoEQAEB9b+qn5lPuMpSMZuzZxhNU7K0YFqfbaOHgmKd05hB5KNpGQ7Z7HZGOiYobEZmXk8AI+pWq0N0RqQacFN5mjOUIUbFTbuvf8AIY9wnKRj+JLdwjLkc082k1v8Ve/uDfspO992DYsbY4YBpA7+K4bW86+IPgiVmO0jxQm037jHZQvLW9BUzrYVr3HOOyns04z2R20Xbz4ldDQMyeyybf1C9S9ALKRG9dBGSMSOJQaj4yCzan1MuRykzCVWpWDcys91qfolqt92aos61wZYnvk0Ktu0SVotjgMpSpYRmei5eGjp4Y/ZFW2+4yhIo/azv5DwQztBjs2BdquJ/g7r/hCLdWKy0w6RcvpkYt/KD7PTOTj1XHMn/wAfifyuEx/Adz+VSUAIGNZk9AtNow3O5INZxP8A4x0cUq8x/Ez/AMv0nSFbF7TaHxheCyq21CJaHEuGfBbJtL917qQfqF5+3WW4x4a4gvMvkDEzOBz/AMqqaXGifL52LW/a5DZDsTriem5YbLQW++MScDOJTFeyNIkuM4btyXZs9z/hJiYAjEqqpCOafBZu0SDmeq0rNaGuaDPndKrYtgvex3ugkHkc8SiUtjlgl285DwKXzpXCZvJp90HuHRdV/Uv1KiPnA8k9GxiKxi6wITtpUabrr6jWu0cbvXHBcibb0ls63pctjjAUVjUOhbqT/gq03f8AF7T9CnABE7td3dB7XcyafYoxhK6w8EZsYHzkUY0JyUPO/wBxx9k0P0/LsXYcY3ozGcUjtO30rM2XmXR7rBBc7puHErzlI2m3Okk06IOTZg8NXu8hdMYac9VPS93/AGIPIlWp5fse8pOjMg8wnKYa7IDosaz0DTY1jRg0AYkkxvnitGk/iRyC4rqX2K6ZoBoGZValpDdxKXLm/wBj4ITwFNvgVTvuQ7abkQR54qnt1N249x+VH2Vr8HAHzql6thDcW073MkjsuXJXuVUx6D7X0z/JwPNysGtGIqPPAmfssm88fC0N5NXW1aupPMfpRrJpcaD5X3Nptra3MPPQfhFFuYc2E9AsmkHk/D2kJppdlck6YqXxOSeF/wBE6xT/AIxxzmuya4dP2gOsx07p2zUv6AJ4UxvAXVim8vLaX4Rz+b0cIwX2Q8O4QDRct+syco7H8JT2fUhVfVD0uR5y7XJjCzknGeiO2xDMhx5/pN2mqymJceOSxbR6QC8IBuakY9slWKplFuuxpiyNOAS9exNG/wCyUtW3Q0C7dJOhmBOJOmG5O2f/AHWhzSHA78VTzKS2bWu5n1GDIBKPs69ANnHerNsLRmJR85h3J5l9ie4cOA/CVq7Lf8hPf8L2L2ADCEhWHLoR+FlnoZKWeWfsouwc3uP0mbLstrIwA6Baz2HgFUUJxvt5SUXkbXLGS0CFCnvPgPwuCy2cSbuJUfTjcP8AsEpawXXQHsYMcL4l3c/RBT9w7Yz6ujoPPRRLikd72dx+VEP1YdMRouE/CPuna1djWS+Lu+RI7LMY5Mseu94+SHWmIV7Js6sPd9nvf1c1juzSEkfRCmSDRe9mpa68OEb+s7ls2ix03/HTY/iWgnvms2p6LWcmWX6Z1Y7/AOp8IV4rp46mv5RGp3/Sn/DKUPR21NfhaXvYDFxzniRdzu3iBBPgh221VGO+N5ez3WAEkHGZOMwD33zCHXsNeg5obVr1WOMYXoZEEXvejHWNxEYqrRamOvss4I1N17nc3EgjoAnnnJ1Np8ccJbEe1iaSa5/OvwcbZQwG0Wt5M4hub3nQDyBwRH+mb6ZYWsYBgW04+FsYXnbnEGcBgI1wcbt9hY5lqsr2B2DnXXEEcSYcByJTlnsez7TJY2m8nGAS1/8A1kEJXTvnPD17Lto0JKdYmt/fuFs3p3Z3taXsex5MFmBAwkm+SAR2PBeno2lrmhzYLSAQRvBXjK/oTQdduPeyPiMgyIOQIwMx0lLUvRKvSc40LSWYiPibewHxXSRnhiNy58vh/DX9FNP7oebzx9ST/DPobag8lWleIp2nadP42U641BAd0Pu/Qpmn6Tlp/wB6hWpam6XM/wCwAPguPJ4HL/S0/wAMrOePVNflHqzzy8URtTis2jarwDgcDBEyDHI4hMMtWK43hpF+B8VuquKnToD9Uk2urtrKTx17CuUaPr+XPDFWY6TnHdINqJmhUCRzW0mTqNLg1KbJ4poUsEKyuCcK9zw2CejZ59009GZXJG9Z9e2wYiVpWsLItDAuTNi1R04UmuRXaDg+Nd6yNo7Oe6LgBEZEjBapgbpUdU0CSJqXtHVtJaMuy7JeGgOujOcZJGmGELbstMNaGgwBuBw45JT1qqbSUziqA2h90/N4obmnKVnPtRSz7U6M963w9MyaRpPp6kdiqOacr7vELO9rdqe6q+1nUpl4ahvMkarNaMw53X9rzdv2o4OhrA0DqT1Wg+1FK1Xg5gLox4en6lsS7T7MxxtJ5J4qMs73um8Add6cqgHd4KjHxkuhrj5Voknzy9j1OyuAH+64/wDq1cSHrnaqKXk17/wV82fYK141CI2oNQshtpKM20uXe4RwK2azaw1CK2sNVksrnyEVtcb2hI5HVs1PaBquCuNQs8VGfKFBc08f2l6UHrZrNrDUKsMvB91l4ZOgXhOBg5rPa1mh7/tFaxn9u6GtB6mx8WkarvtI1SjaLOPdFZZqfHukakdUxgVxqu+vGqoLIzj3V22RnHukehk2cFXiiseutsrOPf8ASMyys1Km3I+2dY9Ha5SnZWanw/CYZZW6nwUach2Da5MMcrMsoTFOzcVGkqN1aGbHaIT7rVgk6dm4ohoYZqmOrmdIhahvYKvaUhVejV2QkagKHNPkrKSXBR7lRzlR8pZ73K0yZsM5yC+oNUB73ITi4q0yJTCvqjVLvqjVVfTf8p7Jd9F/ylUSQjpl3VhqhPrjVDdZ3/KfD8pZ9mf8p8FRKRHTDOrDVBdWGqC+yv08QlKtlfoe4/KZKRXTG3VRqhmoNVnus1TQ91U0any+ITdKF62PesGqiz/UP+UqI6QOthmVDoOwRmVeDeySa5GaQqtAQ8yv/VvZEFcfK3skmOHFGaW6lTaGQyKo+UIjao08SlQ5mpVmluh7pGgpjjHjRFa8aJVhboUyxw+U90rQ6Ydrkdjkux43N8Uyx3Ad1OkOmHa7h9UQO4IbeiM1TaHTIHHRXY46KsK7ApUiiYxTcUzTcdUqx0Jhj1GkEcppygEhTcnbOkSJ0aVIBdqKjHKVCuhdjn9RCuEq6knaqWrVA0EkgAZk4AczuS9BVULGgEJ1nCSq+kVnDg31gM7wCWjm6IhdsW16VZ7mMfeLc8DBGGIO/Ex00Vph+wlWxk0mqFgVnM4lUdd1xTqSbyMq9oS7wFepWYBikqtrZunumUoHVTCPhKVCh17aBu8UjVtx3R1TKRX1DL3cks8pWpa36pSraDqVSZQjVDr3xp3S7qg1HdJuKEXKmkDpfuP+uHzBRZ17gojpG0/cY9kbr4q7bMNfFZjartT3RQ92p7p2mFbNJtnbqrCi1Z7XHVEbxSNDrZoNpjiiBjdUgwIzUrQ4227qiscOJ86pVp8/tGY8JWgpDLJTLI8+ZSrHJll5JSKLQywngOeCK1w1nklxTIEnDie6Kxh3S4f1Bd/+RxU2hupBg/QLs6nooKRAJLHQMyYbA194iclhbQ9KqdF5Yab3QS0kRBIAOE5/FwiEnS67B8xLueiYE1SZ5C8U/wBOQW+5S97D4n+6M5wAHDfvWe70rtDzHrG0wc7jYjri7LjuSvDT7m82fQ+oNIaJJDRqTA7lUG2qDTF8OOjZdJ0kYeK8HZ6TDVYalpZWDg6Zc6WmARvkz9lvssVJhL2Px91gDCAJddDQS3fMHBL5KRt77nqqO2aZzvNwkXmkSMJI5TCpX2sTgxhcTkSDE7sYWZZ7IwOutaBdggmScQZxK2rKwAExjl+fqj09K5EaR5i2m3OlwYBdnEDHDQF3hCwqtjttc++17h/chrOdzAeC+kOcgOKM3r0Fezxtg9EQDetDg7RjZAHXBb1OkymIYwNGjR+EzXWZWfBMqnU2+Sei9ephIlJPtTlWpVkb5870sScU2jLjuXqvSznjerPSrynSG2cquSdV4RXvwSlUpkZlH1EB7pXXuKXe+NexP0ToVli6FxxBVC5cREchbo4+H5UQYKibQOQAqBXa88EqxOUOiv0tkbzzHLYVj0ZjCcgUejhpyCKHE4gdB+VOppehKfG46fDX6kZYnESYCcobNn+XSQqsrzgW+eyMypGRPnkkrSBOXLS1tJ/2Ct2YBv6lMU7A0CSRAxJ3Ac0sLe4Akk4dZO4Aazgj2ZhdD6nvHcP4NyyH8iCPiPhkp016DS8y+pjlCk0/BiPmcIb03u6YHVHtNSnSY57y4tYCTdwgcA3E9SUai8K20aDalJ7MrzSJUnyyqt62+TEsXpbZjULA0MALWtfAh8hzgRHvBuBxO9w1W5Y9rMqiWPDoa1x3Q14JaXA5ZHsV5Gt6IifddPwmCJxA+5JXktrbNrseaYZULcBcAcW4AGSGSJkz1Kasc12Y+PM67o9f6RemlFrHMokveQYeCbjHZAi8PeMTlhlivndS0uJky6Z4nOZlVtVJ7SQ9padCInlOaUDTm2U8QpQaps1WU3uzaccZIH1KdsWyn3jJgajGDzGHisizW9zJkThv8eR48ERu0jOUJqlehoqk+dGo6k9t66DdDoJdGOpA04hMWW2uEQ6IMgzkdY3FZAtrt88uC4yoSco34Zdlz3Gzpm/c+nejm3hhTfGOAfJJJ3B0r2dmtUYFfCqNsjHKO56ar0+wPSsMAZULoEXTMEScZJIw0UlFa0x3Us+qVKgAJOQEzwCzdn7Xo2gE03h10wRiCNDdOMHcUCi9jxdMkH+ziMd4xSeyNhMs7nuaXQ+MzIAEkR3QUa3slda0a1oeRkJ6rPrVOXfPmm3DHGISzxunzpyVJkhWRIRqRvPYf4XGsacJIPQeCcbTnOSrvaJ4qiRKs3GtmdVo6SlalDn2C24bvUcxuicks9I8xUoHyEpVpuXq61IaJOph58ytsf4ijydRiXcvVvg5gHslalhpu3QeBTpA+Ln1R5sqpW3W2N8h7pCtsx43Ty/SZIdeIh+oneURPZ36KJtMfzY/5IzGOTdJ6RY5Ev4GDB3GMjuK6Ezky4es2KL+KO6qdywrM+qXS+s9+gL3RyicuC0adbVZPZ5mbw3RW55X4HWPemGvG/NLsrAjRHrWR7QHOa8A4glpAPIwi5T7kFdp7XH4CtLDIOM6/bRP0H3WiXl0bzE9SsVrijte5SrCtcF/jbVfM9o1qNqDybpBgwYIJB0KaZV5rBIacSMYIvAw4AjGHDEdEehansb7jw/HJ+cRkHtE9SCuesNHdHjsdL5ePyegpy4FpJIIIwwOPHMIVahdpPFMQ+6brs3XgPdlzs92aTZtUANL2vGchnvgc7ovEcm84WnZ64ePccHYThnHLMdVJz09y0ZW+Z/g+VbRo2iqQazjgcJEBusAABKnYloAvNYC3cQc+K+rVbIahLHUXGDiThqRG4gwMpOOSYbZ2MbEBv8AXf214J/MT7HVinI9u/0PiT6T2mCwyd2Z8MskJxx+GD4jrzX1PaGz21ZDWkB2bmwJHOJPQ64hef2j6HOPwuflDQQ2ANwAbuyT9xnL9DxZeABv87gi03umQe/1Xp6XoSf5vPCB9loP9DQWhrG4/NiCccjByQegqaPFCoRm6DviPqr+1xiehhezq+gzAWl9SMDeDZk/LC5bPRRmbDWGA3tcI3YHdwSOoM1S9RL0U9JTTe2m9xLHGG5ktcThEZNK+pMtwaBeDjlIa17jnE+6CvAbP9E7j21WH3wZBe3CY3gGF6SyWi00wZYHyZvTBygAZADop10vsMr1PJvVTickC4Nfus3/AFV/86LxyN4/hGZtVn8mvbzb+58FkjltvY4Hbsow54A7+a5Udy88EBu0qPz+DvsEUW6l8464eJTbJdLOFx3AnWPoquf5x/CpadoUm3Zc0yQBdxIneQ2YHHJMNLTljpjh4YI6NpoVe87oSz2nRaT40HZLVrQBw6wjMk7vQnUZh+Fn1A6fdd0I+uKZrWok8EmamcnjGX4VdpLRyqbdb1+4T2gzGHhj90N9flyQ3PGgG7vxnzKE8g4kYDPE7sct6dUhK8Pbe0yzqh0UWRVrPkwHRuy/Ki3WivwOT3RgtcrtfzSwdxRGu4qp6g2ypxR21PMJFr+KJeWFcJmhTtLmm8ww8YtOOB6QexR2Wys9xdVe55OOOQ5DticcM1mNemGVY1WT52c94OpOVwmarK665xO9Z4rK7aqfq2ebfgql7kbbUOqt6xKtrjfiiNLSg53yjRaxrpqR6habpVqvpDQDrtVl5zS2CWj3ZAxa/wDjAO4g6JVl3UzrvHLRIWzZ7i69fvHP3sTO7EEeEJLhtaN4asKyuqbXsj3dk2vTaG3KlR7n/DSviphucXOLixvNw4StNliDveeZPyj4R3+LmewXh7FabjRLPfgYz7p3S53xE8Mea0KG2y3DL6dty56wNP5T01/qUTpVyvt3/U9Y+y6FL1LEHRhlvxEcoWfR9IWnP6p2nthh/kpt1PdHZHisN9mg7bGN6ZZZwBglhtBuoPUfcoNXbDQMx3/CR1sq8mOVt0v3I+hLsdTnzgeAVxSCza1sY8zffe/qYH/XLquNJiPWPzmSWk8vhOCn0Uc1eJxN8PZqCjyR20lj0qrg4H1j+RLIPOGhOe0Tmioom/ER6DpaB/ifohEhLmvxQX2oDMhVmGQvOhl7GnNoPOEA2Sn8jewSlS36IPtLjjly5b1VScrzbfA1aLJT3C7jqR9DxSNostPGJ7z9cER9pw8wka9o1Mdc0dpFJV0+4Kr6xnwPw3NMx+PBAbtZ03aguHcT8J6ypaK5gnAmCcOXFeFtD3ZuLuE4uzj3jjoh3OzFi39T2es2rts0zdDL5gfygidWwTB1S9k9I2EH1gNMg4DF04cBIj8LAo2qWQ9t9v8AGXABut0hpcMspjguVqYPwNBaATdEl434hxMjiNcltF3inXY9s2s1wBa4OByIiJ4ncrTnl9fHsvDbLtrmTBJE/ARgZwBwy/S27Lte8Q17bumPunTMyt2IVgrW55NZwb5A/CiB7QNfH9KLcCav7/ueTaZ3KxAGv3+ypeUnyR+F0nSFDuB8Vdj/ADj+Uve8wV2VgbGhUVxU8yk58wpeWNseFVWFZZ/rF1r/AD+1hWtmkKqK2oFmMeiMet1EqxTXdGux41Ks6toVlC1eYVvaSsqZKvCQ/Q1vXwMVX14WaK43kcvquCrP6TJ+5y34TT4NNtTRH9pjPHrksa+VKtYkcPqs2iPw/OmblPaDDv6xh2zTdKoDkQvNWZs6j8fn8J2jXxiZHXwxxKm+OX2DXhIv5Y3v1N5tQQiioPOqxRbBHxdRr9EenagRIP2nuk4rsSeDLi1tcdjcD9EGpanDes9lp6jzhCIak5oKGCs2vQYdaSd/iqmqlH1eKXfX3T5/OCKnRlkddjSfVwz+mP7QTXJmD+ug69lnPrk5YcOCqLVA+/Hh+kKOrDr9R59eD8Thpn46joq+0EmJw4pIWgeeOap6zSZ5pGjsmh41dx/R/CxdobOY8l0gTExvgYdUdtSTn58hVLpJx39MkNP0LK0u5561WUtOJw90DCBABmdwyHdLUahBDhhGRiQDG6RAK9PVZeEHFZVr2dGIm6DJA35Xo4wEU/cqsq7C/wDqBcA17nYZOacf/Zvwu8DxV69kqfFm0ib03REDMOIjd33rPc0yBjju0MxEnziEShVDDMGeDo7wII4IlU9hPbaowFUgDAAOEAcIURrl7EWckHfDhP8A1wUWN0gr8KXlS+pe84LoIhJ5KA+R5xVC9cJ8ysYIXef8FS8EK8peW2YMHqXkC8uhyBhgPhW9alby5eQMNmou+s8/bqlAVYP8/ZYw42r5+662p5y8UkHx+fp1Xb/nzuKOxWjQD/P16qzapCz2VfP2RL+nn8jzCOyNY9mmyt/jRckzIKzxV87uSK2r5/W7qs9NaZOZqK6pHHWgnDM8emZ3dE3Z6wILSc+GGfLj/lY7qvFEs9QgySpzKTGzN3Ou3/p6Gk8DAZaK73Bwj871jstPn9o7LRxVDzKw1vY658YAYD8IF69lPnycl0VgV0VOX0WFSa9OSpaZiDrOvDihPnDCNM+eYwTIqxxUbVG8JXKGVNegg6uR3w/yhuqxOv2Wg5jTm0Lj7M0iC2OI1SuS05ku6EGVciVwVCTmfFHds4Rg44Kf6eI913UodLLefPuBa/HDOMsj+1Kj8In6oVWzObBiTG6PDhzSt8kjVK0Uiudp8BatAO4/51WZUoXdxz+LE4b1rig4cJQqlMxuI8UumjojPPuZbLW8CA44cf0onvVN4eCiJXzvuI31WVFFYx0v5qt5RRYx2VyVFEGFElSVFEAnJXJXVFjEDlL6iixiF67Kiixjod587lcOwz0/QPbMLiiwpYP/AH5+66H+fP6UURFaRYVFYVV1RERpFhXRW2hdUQJuUFbaUenaFFESNwtBxWXRVUUWZztInrMM1PWTvUUWNpHW1eKI2rIUUSiVKKk3sFUUgDHiuKLB7BZBGOKE6kOnBRRYC4KezN0+v5XFFEA+ZR//2Q==" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography
                        text-align='center'
                        variant="h10"
                        noWrap
                        component="a"
                        href={setting.toLowerCase().substring(0,3)}
                        sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 400,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        {setting}
                    </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navigation1;