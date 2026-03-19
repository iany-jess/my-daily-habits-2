import { Link } from 'react-router-dom'
import { useHabits } from '../contexts/HabitsContext'

function PaginaInicio() {
  const { habits } = useHabits()

  const habitosAtivos = habits.filter((h) => h.ativo).length
  const habitosManter = habits.filter((h) => h.tipo !== 'parar').length
  const mausHabitos = habits.filter((h) => h.tipo === 'parar').length

  return (
    <main className="pagina-inicio">
      <h1>My Daily Habits</h1>
      <p>Construindo uma rotina melhor, um hábito por vez.</p>

      <div className="resumo">
        <div className="resumo-card">
          <strong>{habits.length}</strong>
          <span>hábitos cadastrados</span>
        </div>
        <div className="resumo-card">
          <strong>{habitosAtivos}</strong>
          <span>ativos agora</span>
        </div>
        <div className="resumo-card">
          <strong>{habitosManter}</strong>
          <span>hábitos a manter</span>
        </div>
        <div className="resumo-card">
          <strong>{mausHabitos}</strong>
          <span>maus hábitos a parar</span>
        </div>
      </div>

      <Link to="/habitos" className="btn-primario">
        Ver meus hábitos →
      </Link>
    </main>
  )
}

export default PaginaInicio
