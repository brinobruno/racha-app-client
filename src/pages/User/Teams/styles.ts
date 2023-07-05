import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;

  padding: 3.5rem;
`

export const TeamsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  width: 24rem;
`

export const TeamContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: linear-gradient(90deg, #495bcc 0%, rgba(229, 28, 68, 0.6) 100%);
  padding: 1rem;
  border-radius: 5px;

  width: 100%;
`

export const TeamDataDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
`

export const TeamOverall = styled.strong`
  font-size: 3rem;
  font-weight: 500;
  line-height: 100%;

  font-family: 'DinProCondMed';
  font-weight: 500;
  color: #e9edf5;
`

export const TeamData = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    font-size: 1.125rem;
    font-family: 'DinPro';
    color: #e9edf5;
  }

  strong {
    font-weight: 600;
  }
`

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
`

export const CreateTeamButton = styled.button`
  width: 24rem;
`
