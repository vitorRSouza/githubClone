import React from 'react';
import {Link} from 'react-router-dom';

import { Container, Breadcrumb, RepoIcon, Stats, StarIcon, ForkIcon, LinkButton, GithubIcon } from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={'username'} to={'/vitorrsouza'}>
          vitorrsouza
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={'/viorrsouza/Ola-mundo'}>
          Ola mundo
        </Link>
      </Breadcrumb>

      <p>Um código para aprendizagem.</p>

      <Stats>
        <li>
          <StarIcon />
          <b>8</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>4</b>
          <span>forks</span>
        </li>

      </Stats>

      <LinkButton href={'http://github.com/vitorRSouza'}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  )
}

export default Repo;