// Shows one button per category. It owns no state: App tells it which one is active.
function CategoryFilter({ categories, active, onSelect }) {
  return (
    <div className="filters">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={category === active ? 'chip active' : 'chip'}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter