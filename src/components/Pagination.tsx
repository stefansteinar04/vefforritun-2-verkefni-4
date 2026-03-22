type Props = {
  offset: number
  limit: number
  total: number
  onPrevious: () => void
  onNext: () => void
}

export default function Pagination({
  offset,
  limit,
  total,
  onPrevious,
  onNext,
}: Props) {
  const hasPrevious = offset > 0
  const hasNext = offset + limit < total

  return (
    <div className="pagination">
      <button onClick={onPrevious} disabled={!hasPrevious}>
        Fyrri
      </button>
      <span>
        Sýni {offset + 1}-{Math.min(offset + limit, total)} af {total}
      </span>
      <button onClick={onNext} disabled={!hasNext}>
        Næsti
      </button>
    </div>
  )
}